import React, { useRef, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  Linking, 
  Image
} from 'react-native';
import Svg, { Path, Circle, Rect, Polygon } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Componentes de iconos SVG simples
const EmailIcon = ({ size = 20, color = "#60a5fa" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path fill={color} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </Svg>
);

const LinkedinIcon = ({ size = 20, color = "#60a5fa" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path fill={color} d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </Svg>
);

const GithubIcon = ({ size = 20, color = "#60a5fa" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path fill={color} d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </Svg>
);

// Iconos para tarjetas "Sobre Mí"
const UserIcon = ({ size = 28, color = "#3b82f6" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx="12" cy="8" r="4" fill="none" stroke={color} strokeWidth="2"/>
    <Path fill="none" stroke={color} strokeWidth="2" d="M20,20c0-4.42-3.58-8-8-8s-8,3.58-8,8"/>
  </Svg>
);

const FlagIcon = ({ size = 28, color = "#10b981" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path fill="none" stroke={color} strokeWidth="2" d="M5,22V4c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v18l-7-4L5,22z"/>
  </Svg>
);

const StarIcon = ({ size = 28, color = "#8b5cf6" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Polygon 
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
      fill="none" 
      stroke={color} 
      strokeWidth="2"
    />
  </Svg>
);

// Iconos para proyectos
const LaptopIcon = ({ size = 24, color = "#3b82f6" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect x="4" y="4" width="16" height="12" rx="1" fill="none" stroke={color} strokeWidth="2"/>
    <Rect x="2" y="16" width="20" height="2" fill={color}/>
  </Svg>
);

const MobileIcon = ({ size = 24, color = "#10b981" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke={color} strokeWidth="2"/>
    <Circle cx="12" cy="19" r="1" fill={color}/>
  </Svg>
);

const ApiIcon = ({ size = 24, color = "#8b5cf6" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    {/* Caja principal del servidor */}
    <Rect x="4" y="4" width="16" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/>
    
    {/* Líneas horizontales para representar racks/slots */}
    <Path d="M8,8 L16,8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <Path d="M8,10.5 L16,10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <Path d="M8,13 L16,13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Indicadores de estado/luces */}
    <Circle cx="6.5" cy="8" r="0.75" fill={color}/>
    <Circle cx="6.5" cy="10.5" r="0.75" fill={color}/>
    <Circle cx="6.5" cy="13" r="0.75" fill={color}/>
    
    {/* Ventilación en la parte superior */}
    <Path d="M7,5 L9,5 M11,5 L13,5 M15,5 L17,5" stroke={color} strokeWidth="1" strokeLinecap="round"/>
  </Svg>
);

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

const SkillIcon = ({ name, size = 40 }) => {
  const getSvgSource = (skillName) => {
    switch(skillName) {
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
    <View style={[styles.fallbackIcon, { width: size, height: size }]}>
      <Text style={styles.fallbackText}>{name.charAt(0)}</Text>
    </View>
  );
};

const projects = [
  { 
    title: 'SysControl', 
    description: 'Proyecto de gestión de inventarios y ventas con punto de venta, control de salidas de productos y generación de reportes analíticos en tiempo real.', 
    icon: <LaptopIcon />, 
    tags: ['Java', 'Swing', 'MySQL'],
    github: 'https://github.com/GabrielRivas12/SysControl'
  },
  { 
    title: 'CentralCoffee Mobile', 
    description: 'CentralCoffee es una aplicación móvil desarrollada para conectar productores y compradores de café. Los usuarios pueden explorar ofertas, visualizar perfiles, chatear, ubicar centros de acopio en el mapa y registrar la trazabilidad de su producción', 
    icon: <MobileIcon />, 
    tags: ['React Native', 'Firebase', 'Supabase', 'Teachable Machine'],
    github: 'https://github.com/GabrielRivas12/CentralCoffee'
  },
  { 
    title: 'CentralCoffee Web', 
    description: 'Plataforma web de CentralCoffee desarrollada en Python con Flask para gestionar los datos de la apliación y acceso a herramientas de inteligencia artifial para la deteccion de la calidad del grano de café', 
    icon: <LaptopIcon />, 
    tags: ['Python', 'Firebase', 'Flask', 'Supabase', 'Teachable Machine'],
    github: 'https://github.com/GabrielRivas12/CentralCoffeeWebTestPython'
  },
  { 
    title: 'Backend Hotel API', 
    description: 'API RESTful para sistema de gestión hotelera, que maneja reservas, habitaciones y clientes.', 
    icon: <ApiIcon />, 
    tags: ['C#', '.NET', 'SQL Server', 'API REST'],
    github: 'https://github.com/GabrielRivas12/Backend_Hotel'
  },
];

export default function Inicio() {
  const scrollViewRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Inicio');

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
              <Text style={styles.cardText}>Soy Ingeniero en Sistemas y Desarrollador Móvil y Web con experiencia en liderazgo de grupos de trabajo para el desarrollo de proyectos de innovación. Poseo conocimientos solidos en el desarrollo de software y diseño de interfaces</Text>
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
              <Text style={styles.cardText}>Me caracterizo por mi capacidad detrabajar en equipo, responsabilidad, adaptación rápida a nuevas tecnologías, atención al detalle y entregar productos de calidad.</Text>
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

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0f172a' 
  },
  scrollView: { 
    flex: 1 
  },
  scrollContent: { 
    paddingBottom: 60 
  },

  navbar: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 30, 
    paddingVertical: 20, 
    backgroundColor: 'rgba(15, 23, 42, 0.95)', 
    borderBottomWidth: 1, 
    borderBottomColor: '#1e293b',
    zIndex: 1000,
  },
  navLinks: { 
    flexDirection: 'row' 
  },
  navButton: { 
    marginLeft: 25,
    alignItems: 'center',
  },
  navItem: { 
    color: '#94a3b8', 
    fontSize: 15, 
    fontWeight: '600', 
    paddingVertical: 8, 
    paddingHorizontal: 5 
  },
  activeNavItem: { 
    color: '#60a5fa', 
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -2,
    width: '80%',
    height: 2,
    backgroundColor: '#60a5fa',
    borderRadius: 1,
  },

  heroContainer: { 
    paddingHorizontal: 30, 
    paddingTop: 40, 
    paddingBottom: 80, 
    minHeight: height * 0.8, 
    justifyContent: 'center' 
  },
  greeting: { 
    color: '#60a5fa', 
    fontSize: 18, 
    fontWeight: '600', 
    marginBottom: 10 
  },
  title: { 
    color: '#f8fafc', 
    fontSize: 42, 
    fontWeight: '800', 
    marginBottom: 20 
  },
  description: { 
    color: '#cbd5e1', 
    fontSize: 18, 
    marginBottom: 40, 
    maxWidth: 600 
  },

  buttonContainer: { 
    flexDirection: 'row', 
    marginBottom: 50 
  },
  primaryButton: { 
    backgroundColor: '#3b82f6', 
    paddingHorizontal: 32, 
    paddingVertical: 16, 
    borderRadius: 12, 
    marginRight: 20 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  secondaryButton: { 
    backgroundColor: 'transparent', 
    paddingHorizontal: 32, 
    paddingVertical: 16, 
    borderRadius: 12, 
    borderWidth: 2, 
    borderColor: '#3b82f6' 
  },
  secondaryButtonText: { 
    color: '#3b82f6', 
    fontSize: 16, 
    fontWeight: '600' 
  },

  socialContainer: { 
    flexDirection: 'row', 
    marginBottom: 60 
  },
  socialIcon: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: 'rgba(59,130,246,0.1)', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 20 
  },

  section: { 
    paddingHorizontal: 30, 
    paddingVertical: 60 
  },
  sectionHeader: { 
    marginBottom: 50, 
    alignItems: 'center' 
  },
  sectionSubtitle: { 
    color: '#60a5fa', 
    fontSize: 16, 
    fontWeight: '600', 
    marginBottom: 8 
  },
  sectionTitle: { 
    color: '#f8fafc', 
    fontSize: 36, 
    fontWeight: '800', 
    marginBottom: 12, 
    textAlign: 'center' 
  },

  aboutCardsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap' 
  },
  aboutCard: { 
    width: width < 768 ? '100%' : '30%', 
    backgroundColor: 'rgba(30,41,59,0.8)', 
    borderRadius: 20, 
    padding: 30, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#334155', 
    alignItems: 'center' 
  },
  cardPrimary: { 
    borderColor: 'rgba(59,130,246,0.3)' 
  },
  cardSecondary: { 
    borderColor: 'rgba(16,185,129,0.3)' 
  },
  cardTertiary: { 
    borderColor: 'rgba(139,92,246,0.3)' 
  },

  iconBackground: { 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 15 
  },
  cardTitle: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: '700', 
    marginBottom: 15, 
    textAlign: 'center' 
  },
  cardText: { 
    color: '#cbd5e1', 
    fontSize: 15, 
    textAlign: 'center' 
  },

  skillsContainer: { 
    backgroundColor: 'rgba(30, 41, 59, 0.8)', 
    borderRadius: 20, 
    padding: 30, 
    borderWidth: 1, 
    borderColor: '#334155' 
  },
  skillsTitle: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: '700', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  skillsDescription: { 
    color: '#94a3b8', 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 30 
  },
  skillsGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center' 
  },
  skillItem: { 
    alignItems: 'center', 
    width: width < 768 ? '25%' : '16.66%', // 6 items por fila en pantallas grandes
    marginBottom: 30, 
    paddingHorizontal: 10 
  },
  skillName: { 
    color: '#cbd5e1', 
    fontSize: 14, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginTop: 5 
  },

  projectsContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: width < 768 ? 'center' : 'space-between' 
  },
  projectCard: { 
    width: width < 768 ? '100%' : '48%', 
    backgroundColor: 'rgba(30, 41, 59, 0.8)', 
    borderRadius: 16, 
    padding: 25, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#334155' 
  },
  projectHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  projectTitle: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: '700', 
    marginLeft: 12 
  },
  projectDesc: { 
    color: '#94a3b8', 
    fontSize: 15, 
    lineHeight: 22, 
    marginBottom: 20 
  },
  projectTags: { 
    flexDirection: 'row', 
    flexWrap: 'wrap' 
  },
  tag: { 
    backgroundColor: 'rgba(59, 130, 246, 0.15)', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20, 
    marginRight: 8, 
    marginBottom: 8 
  },
  tagText: { 
    color: '#60a5fa', 
    fontSize: 12, 
    fontWeight: '600' 
  },
  githubButton: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderWidth: 1,
    borderColor: '#3b82f6',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  githubButtonText: {
    color: '#60a5fa',
    fontSize: 14,
    fontWeight: '600',
  },

  contactInfo: { 
    backgroundColor: 'rgba(30, 41, 59, 0.5)', 
    borderRadius: 16, 
    padding: 30, 
    marginBottom: 40, 
    borderWidth: 1, 
    borderColor: '#334155' 
  },
  contactItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  contactText: { 
    color: '#cbd5e1', 
    fontSize: 16, 
    marginLeft: 15 
  },
  fallbackIcon: { 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#3b82f6',
    borderRadius: 20,
  },
  fallbackText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
});