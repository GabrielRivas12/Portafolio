import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
  ActivityIndicator
} from 'react-native';

// Importar iconos desde archivos separados
import EmailIcon from '../components/icons/EmailIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import GithubIcon from '../components/icons/GithubIcon';
import UserIcon from '../components/icons/UserIcon';
import FlagIcon from '../components/icons/FlagIcon';
import StarIcon from '../components/icons/StarIcon';

// Iconos de librerías para habilidades técnicas y proyectos
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaAndroid, FaCode } from 'react-icons/fa6';
import { SiJavascript, SiMysql, SiMicrosoftsqlserver, SiFirebase, SiCsharp, SiDotnet, SiTypescript, SiExpo } from 'react-icons/si';

import ImageCarousel from '../components/ImageCarousel';
import { getStyles } from './InicioStyles';
import { GITHUB_USER, SELECTED_REPOS, CONTRIBUTED_REPOS, REPO_IMAGES } from '../config/projects';
import { fetchUserRepos, fetchRepoByFullName, checkHasReleases, filterRepos, formatRepoToProject } from '../services/github';

// Iconos sociales
const LinkedinSocialIcon = ({ size = 24, color = "#ffffff" }) => (
  <LinkedinIcon size={size} color={color} />
);

const GithubSocialIcon = ({ size = 24, color = "#ffffff" }) => (
  <GithubIcon size={size} color={color} />
);

const EmailSocialIcon = ({ size = 24, color = "#ffffff" }) => (
  <EmailIcon size={size} color={color} />
);

const brandColors = {
  'React Native': '#61DAFB',
  'React': '#61DAFB',
  'JavaScript': '#F7DF1E',
  'JS': '#F7DF1E',
  'TypeScript': '#3178C6',
  'TS': '#3178C6',
  'Java': '#ED8B00',
  'Python': '#3776AB',
  'HTML5': '#E34F26',
  'HTML': '#E34F26',
  'CSS3': '#1572B6',
  'CSS': '#1572B6',
  'MySQL': '#4479A1',
  'SQL Server': '#CC2927',
  'Git': '#F05032',
  'Android': '#3DDC84',
  'Firebase': '#FFCA28',
  'Expo': '#fff',
  'C#': '#239120',
  '.NET': '#512BD4',
};

const SkillIcon = ({ name, size = 40 }) => {
  const IconComponent = {
    'React Native': FaReact,
    'React': FaReact,
    'JavaScript': SiJavascript,
    'JS': SiJavascript,
    'TypeScript': SiTypescript,
    'TS': SiTypescript,
    'Java': FaJava,
    'Python': FaPython,
    'HTML5': FaHtml5,
    'HTML': FaHtml5,
    'CSS3': FaCss3Alt,
    'CSS': FaCss3Alt,
    'MySQL': SiMysql,
    'SQL Server': SiMicrosoftsqlserver,
    'Git': FaGitAlt,
    'Android': FaAndroid,
    'Firebase': SiFirebase,
    'Expo': SiExpo,
    'C#': SiCsharp,
    '.NET': SiDotnet,
  }[name];

  const color = brandColors[name];

  if (IconComponent) {
    return <IconComponent size={size} color={color} />;
  }

  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: '#3b82f6', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: size * 0.45, fontWeight: 'bold' }}>{name.charAt(0)}</Text>
    </View>
  );
};

const languageIcon = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: FaJava,
  Python: FaPython,
  'C#': SiCsharp,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
};

const languageColor = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Java: '#ED8B00',
  Python: '#3776AB',
  'C#': '#239120',
  HTML: '#E34F26',
  CSS: '#1572B6',
};

export default function Inicio() {
  const scrollViewRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Inicio');
  const [sectionPositions, setSectionPositions] = useState({
    'Inicio': 0,
    'Sobre Mí': 0,
    'Proyectos': 0,
    'Contacto': 0,
  });
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    let cancelled = false;
    async function loadProjects() {
      try {
        setProjectsLoading(true);
        const [ownedRepos, contributedRepos] = await Promise.all([
          fetchUserRepos(GITHUB_USER),
          Promise.all(CONTRIBUTED_REPOS.map(fetchRepoByFullName)),
        ]);
        const selected = filterRepos(ownedRepos, SELECTED_REPOS);
        const owned = selected.map(repo => formatRepoToProject(repo, REPO_IMAGES[repo.name] || []));
        const contributed = contributedRepos.map(repo => formatRepoToProject(repo, REPO_IMAGES[repo.name] || [], true));
        const all = [...owned, ...contributed];
        const withReleases = await Promise.all(all.map(async p => ({
          ...p,
          hasReleases: await checkHasReleases({ owner: { login: p.owner }, name: p.name }),
        })));
        if (!cancelled) setProjects(withReleases);
      } catch (err) {
        if (!cancelled) setProjectsError(err.message);
      } finally {
        if (!cancelled) setProjectsLoading(false);
      }
    }
    loadProjects();
    return () => { cancelled = true; };
  }, []);

  const styles = getStyles(width, height);

  const updateSectionPosition = (section) => (event) => {
    const { y } = event.nativeEvent.layout;
    setSectionPositions((prev) => ({ ...prev, [section]: y }));
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const y = sectionPositions[section] ?? 0;
    scrollViewRef.current?.scrollTo({
      y,
      animated: true,
    });
  };

  // Función para manejar el scroll y detectar la sección actual
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // Determinar en qué sección se encuentra el usuario usando coordenadas reales
    const inicioY = sectionPositions['Inicio'] ?? 0;
    const sobreMiY = sectionPositions['Sobre Mí'] ?? 0;
    const proyectosY = sectionPositions['Proyectos'] ?? 0;
    const contactoY = sectionPositions['Contacto'] ?? 0;

    if (offsetY < sobreMiY - 40) {
      setActiveSection('Inicio');
    } else if (offsetY < proyectosY - 40) {
      setActiveSection('Sobre Mí');
    } else if (offsetY < contactoY - 40) {
      setActiveSection('Proyectos');
    } else {
      setActiveSection('Contacto');
    }
  };

  const downloadCV = async () => {
    const url = 'https://drive.google.com/uc?export=download&id=1Wh8LBVe723EcSWOehIXP-pg4OltMj7GG';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log('No se pudo abrir el link del CV');
    }
  };

  const technicalSkills = [
    { name: 'React Native' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'MySQL' },
    { name: 'SQL Server' },
    { name: 'Git' },
    { name: 'Android' },
    { name: 'Firebase' },
    { name: 'Expo' },
    { name: 'C#' },
    { name: '.NET' },
  ];

  // Tus datos reales de contacto
  const contactInfo = [
    {
      icon: <EmailIcon />,
      text: 'gabrielmrivash@gmail.com',
      link: 'mailto:gabrielmrivash@gmail.com'
    },
    {
      icon: <LinkedinIcon />,
      text: 'linkedin.com/in/gabriel-mrivas',
      link: 'https://www.linkedin.com/in/gabriel-mrivas/'
    },
    {
      icon: <GithubIcon />,
      text: 'github.com/GabrielRivas12',
      link: 'https://github.com/GabrielRivas12'
    },
  ];

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.navLinks}>
          {['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'].map((section) => (
            <TouchableOpacity
              key={section}
              style={styles.navButton}
              onPress={() => scrollToSection(section)}
            >
              <Text style={[
                styles.navItem,
                activeSection === section && styles.activeNavItem
              ]}>
                {section}
              </Text>
              {activeSection === section && (
                <View style={styles.activeIndicator} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Hero Section */}
        <View style={styles.heroContainer} onLayout={updateSectionPosition('Inicio')}>
          <Text style={styles.greeting}>Hola Mundo, Soy Gabriel</Text>
          <Text style={styles.title}>Ingeniero en Sistemas y Desarrollador Móvil y Web</Text>
          <Text style={styles.description}>
            Apasionado por crear soluciones digitales innovadoras y funcionales que impacten positivamente al usuario final.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={downloadCV}>
              <Text style={styles.buttonText}>Descargar CV</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton} onPress={() => scrollToSection('Contacto')}>
              <Text style={styles.secondaryButtonText}>Contáctame</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-mrivas/')}
              style={styles.socialIcon}
            >
              <LinkedinSocialIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/GabrielRivas12')}
              style={styles.socialIcon}
            >
              <GithubSocialIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('mailto:gabrielmrivash@gmail.com')}
              style={styles.socialIcon}
            >
              <EmailSocialIcon />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sobre Mí */}
        <View style={styles.section} onLayout={updateSectionPosition('Sobre Mí')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionSubtitle}>Conóceme mejor</Text>
            <Text style={styles.sectionTitle}>Sobre Mí</Text>
          </View>

          <View style={styles.aboutCardsContainer}>
            <View style={[styles.aboutCard, styles.cardPrimary]}>
              <View style={[styles.iconBackground, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
                <UserIcon />
              </View>
              <Text style={styles.cardTitle}>¿Quién soy?</Text>
              <Text style={styles.cardText}>Soy Ingeniero en Sistemas y Desarrollador Móvil y Web con experiencia en liderazgo de grupos de trabajo para el desarrollo de proyectos de innovación. Poseo conocimientos sólidos en el desarrollo de software y diseño de interfaces</Text>
            </View>
            <View style={[styles.aboutCard, styles.cardSecondary]}>
              <View style={[styles.iconBackground, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
                <FlagIcon />
              </View>
              <Text style={styles.cardTitle}>Mi Objetivo</Text>
              <Text style={styles.cardText}>Aplicar mis conocimientos y continuar aprendiendo para adquirir experiencia en las distintas áreas de mi profesión, aportando valor en cada proyecto y desarrollando soluciones que marquen la diferencia</Text>
            </View>
            <View style={[styles.aboutCard, styles.cardTertiary]}>
              <View style={[styles.iconBackground, { backgroundColor: 'rgba(139, 92, 246, 0.15)' }]}>
                <StarIcon />
              </View>
              <Text style={styles.cardTitle}>Mi Perfil</Text>
              <Text style={styles.cardText}>Me caracterizo por mi capacidad de trabajar en equipo, responsabilidad, adaptación rápida a nuevas tecnologías, atención al detalle y entregar productos de calidad.</Text>
            </View>
          </View>

          {/* Habilidades Técnicas - Diseño original */}
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsTitle}>Mis Habilidades Técnicas</Text>
            <Text style={styles.skillsDescription}>Tecnologías y herramientas con las que trabajo regularmente</Text>
            <View style={styles.skillsGrid}>
              {technicalSkills.map((skill, index) => (
                <View key={index} style={styles.skillItem}>
                  <SkillIcon name={skill.name} size={40} />
                  <Text style={styles.skillName}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Proyectos */}
        <View style={styles.section} onLayout={updateSectionPosition('Proyectos')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionSubtitle}>Mis trabajos recientes</Text>
            <Text style={styles.sectionTitle}>Proyectos</Text>
          </View>
          <View style={styles.projectsContainer}>
            {projectsLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#60a5fa" />
                <Text style={styles.loadingText}>Cargando proyectos...</Text>
              </View>
            ) : projectsError ? (
              <View style={styles.loadingContainer}>
                <Text style={styles.errorText}>Error al cargar proyectos</Text>
              </View>
            ) : (
              projects.map((project, index) => {
                const IconComp = languageIcon[project.language] || FaCode;
                const color = languageColor[project.language] || '#60a5fa';
                return (
                  <View key={project.name} style={styles.projectCard}>
                    <View style={styles.projectHeader}>
                      <IconComp size={24} color={color} />
                      <Text style={styles.projectTitle}>{project.title}</Text>
                    </View>
                    {project.isContributed && (
                      <Text style={styles.contributedLabel}>Contribución a {project.owner}</Text>
                    )}
                    <Text style={styles.projectDesc}>{project.description}</Text>
                    {project.images.length > 0 && (
                      <ImageCarousel images={project.images} style={styles.carousel} />
                    )}
                    <View style={styles.projectTags}>
                      {project.topics.map((tag, i) => (
                        <View key={i} style={styles.tag}>
                          <Text style={styles.tagText}>{tag}</Text>
                        </View>
                      ))}
                      {project.language && (
                        <View style={styles.tag}>
                          <Text style={styles.tagText}>{project.language}</Text>
                        </View>
                      )}
                    </View>
                    {project.homepage && (
                      <TouchableOpacity
                        style={styles.demoButton}
                        onPress={() => Linking.openURL(project.homepage)}
                      >
                        <Text style={styles.demoButtonText}>Ver Sitio Web</Text>
                      </TouchableOpacity>
                    )}
                    {project.hasReleases && (
                      <TouchableOpacity
                        style={styles.releasesButton}
                        onPress={() => Linking.openURL(`${project.html_url}/releases`)}
                      >
                        <Text style={styles.releasesButtonText}>Ver Release</Text>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={styles.githubButton}
                      onPress={() => Linking.openURL(project.html_url)}
                    >
                      <Text style={styles.githubButtonText}>Ver en GitHub</Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            )}
          </View>
        </View>

        {/* Contacto */}
        <View style={styles.section} onLayout={updateSectionPosition('Contacto')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionSubtitle}>Ponte en contacto</Text>
            <Text style={styles.sectionTitle}>Contacto</Text>
          </View>
          <View style={styles.contactInfo}>
            {contactInfo.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.contactItem}
                onPress={() => Linking.openURL(item.link)}
              >
                {item.icon}
                <Text style={styles.contactText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
