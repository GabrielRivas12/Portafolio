import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
  Image
} from 'react-native';

// Importar iconos desde archivos separados
import EmailIcon from '../components/icons/EmailIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import GithubIcon from '../components/icons/GithubIcon';
import UserIcon from '../components/icons/UserIcon';
import FlagIcon from '../components/icons/FlagIcon';
import StarIcon from '../components/icons/StarIcon';
import LaptopIcon from '../components/icons/LaptopIcon';
import MobileIcon from '../components/icons/MobileIcon';
import ApiIcon from '../components/icons/ApiIcon';

// Importar el componente del carrusel
import ImageCarousel from '../components/ImageCarousel';
import { getStyles } from './InicioStyles';

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

const fallbackStyles = StyleSheet.create({
  fallbackIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fallbackText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const SkillIcon = ({ name, size = 40 }) => {
  const getSvgSource = (skillName) => {
    switch (skillName) {
      case 'React Native':
      case 'React':
        return require('../../assets/svg/react.svg');
      case 'JavaScript':
      case 'JS':
        return require('../../assets/svg/js.svg');
      case 'Java':
        return require('../../assets/svg/java.svg');
      case 'Python':
        return require('../../assets/svg/python.svg');
      case 'HTML5':
      case 'HTML':
        return require('../../assets/svg/html.svg');
      case 'CSS3':
      case 'CSS':
        return require('../../assets/svg/css.svg');
      case 'MySQL':
        return require('../../assets/svg/mysql.svg');
      case 'SQL Server':
        return require('../../assets/svg/sqlserver.svg');
      case 'Git':
        return require('../../assets/svg/git.svg');
      case 'Android':
        return require('../../assets/svg/android.svg');
      case 'Firebase':
        return require('../../assets/svg/firebase.svg');
      case 'C#':
        return require('../../assets/svg/csharp.svg');
      case '.NET':
        return require('../../assets/svg/dotnet.svg');
      default:
        return null;
    }
  };

  const svgSource = getSvgSource(name);

  if (svgSource) {
    return (
      <Image
        source={svgSource}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    );
  }

  return (
    <View style={[fallbackStyles.fallbackIcon, { width: size, height: size }]}> 
      <Text style={fallbackStyles.fallbackText}>{name.charAt(0)}</Text>
    </View>
  );
};

const projects = [
  {
    title: 'SysControl',
    description: 'Proyecto de gestión de inventarios y ventas con punto de venta, control de salidas de productos y generación de reportes analíticos en tiempo real.',
    icon: <LaptopIcon />,
    tags: ['Java', 'Swing', 'MySQL'],
    github: 'https://github.com/GabrielRivas12/SysControl',
    images: [
      require('../../assets/png/SysHome.png'),
      require('../../assets/png/SysInventario.png'),
      require('../../assets/png/SysPunto.png'),
      require('../../assets/png/SysExistencia.png'),
      require('../../assets/png/SysRegistro.png'),
    ]
  },
  {
    title: 'CentralCoffee Mobile',
    description: 'CentralCoffee es una aplicación móvil desarrollada para conectar productores y compradores de café. Los usuarios pueden explorar ofertas, visualizar perfiles, chatear, ubicar centros de acopio en el mapa y registrar la trazabilidad de su producción',
    icon: <MobileIcon />,
    tags: ['React Native', 'Firebase', 'Supabase', 'Teachable Machine'],
    github: 'https://github.com/GabrielRivas12/CentralCoffee',
    images: [
      require('../../assets/png/detallesmovil.jpg'),
      require('../../assets/png/IAmovil.png'),
      require('../../assets/png/mapamovil.jpg'),
      require('../../assets/png/ofertasmovil.jpg'),
      require('../../assets/png/chatmovil.png'),
      require('../../assets/png/cuentamovil.jpg'),
    ]
  },
  {
    title: 'CentralCoffee Web',
    description: 'Plataforma web de CentralCoffee desarrollada en Python con Flask para gestionar los datos de la aplicación y acceso a herramientas de inteligencia artificial para la detección de la calidad del grano de café',
    icon: <LaptopIcon />,
    tags: ['Python', 'Firebase', 'Flask', 'Supabase', 'Teachable Machine'],
    github: 'https://github.com/GabrielRivas12/CentralCoffeeWebTestPython',
    images: [
      require('../../assets/png/ofertasweb.png'),
      require('../../assets/png/mapaweb.png'),
      require('../../assets/png/chatweb.png'),
      require('../../assets/png/IAweb.png'),
    ]
  },
  {
    title: 'Backend Hotel API',
    description: 'API RESTful para sistema de gestión hotelera, que maneja reservas, habitaciones y clientes.',
    icon: <ApiIcon />,
    tags: ['C#', '.NET', 'SQL Server', 'API REST'],
    github: 'https://github.com/GabrielRivas12/Backend_Hotel',
    images: [
    ]
  },
];

export default function Inicio() {
  const scrollViewRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Inicio');
  const { width, height } = useWindowDimensions();

  const styles = getStyles(width, height);

  // Definir las posiciones de cada sección
  const sectionPositions = {
    'Inicio': 0,
    'Sobre Mí': height * 0.7 + 100,
    'Proyectos': height * 0.7 + 1100,
    'Contacto': height * 0.7 + 1800,
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    scrollViewRef.current?.scrollTo({
      y: sectionPositions[section],
      animated: true,
    });
  };

  // Función para manejar el scroll y detectar la sección actual
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // Determinar en qué sección se encuentra el usuario
    if (offsetY < sectionPositions['Sobre Mí'] - 100) {
      setActiveSection('Inicio');
    } else if (offsetY < sectionPositions['Proyectos'] - 100) {
      setActiveSection('Sobre Mí');
    } else if (offsetY < sectionPositions['Contacto'] - 100) {
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
    { name: 'Java' },
    { name: 'Python' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'MySQL' },
    { name: 'SQL Server' },
    { name: 'Git' },
    { name: 'Android' },
    { name: 'Firebase' },
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
        <View style={styles.heroContainer}>
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
        <View style={styles.section}>
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
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionSubtitle}>Mis trabajos recientes</Text>
            <Text style={styles.sectionTitle}>Proyectos</Text>
          </View>
          <View style={styles.projectsContainer}>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectCard}>
                <View style={styles.projectHeader}>
                  {project.icon}
                  <Text style={styles.projectTitle}>{project.title}</Text>
                </View>
                <Text style={styles.projectDesc}>{project.description}</Text>
                <ImageCarousel images={project.images} style={styles.carousel} />
                <View style={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <View key={i} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity
                  style={styles.githubButton}
                  onPress={() => Linking.openURL(project.github)}
                >
                  <Text style={styles.githubButtonText}>Ver en GitHub</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Contacto */}
        <View style={styles.section}>
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
