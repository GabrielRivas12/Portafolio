import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function Inicio() {
  const scrollViewRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      'inicio': 0,
      'sobreMi': height * 0.7 + 100,
      'proyectos': height * 0.7 + 1000,
      'contacto': height * 0.7 + 1800
    };

    scrollViewRef.current?.scrollTo({
      y: sections[section],
      animated: true
    });
  };

  const handleNavPress = (section) => {
    switch (section) {
      case 'Inicio':
        scrollToSection('inicio');
        break;
      case 'Sobre Mí':
        scrollToSection('sobreMi');
        break;
      case 'Proyectos':
        scrollToSection('proyectos');
        break;
      case 'Contacto':
        scrollToSection('contacto');
        break;
    }
  };

  const technicalSkills = [
    { name: 'React Native', icon: 'logo-react', type: 'Ionicons', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'logo-javascript', type: 'Ionicons', color: '#F7DF1E' },
    { name: 'Java', icon: 'code-slash', type: 'Ionicons', color: '#007396' },
    { name: 'C#', icon: 'code-slash', type: 'Ionicons', color: '#9B4F96' },
    { name: '.NET', icon: 'code-slash', type: 'Ionicons', color: '#512BD4' },
    { name: 'Python', icon: 'logo-python', type: 'Ionicons', color: '#3776AB' },
    { name: 'Spring Boot', icon: 'leaf-outline', type: 'Ionicons', color: '#6DB33F' },
    { name: 'HTML5', icon: 'logo-html5', type: 'Ionicons', color: '#E34F26' },
    { name: 'CSS3', icon: 'logo-css3', type: 'Ionicons', color: '#1572B6' },
    { name: 'MySQL', icon: 'database', type: 'FontAwesome', color: '#336791' },
    { name: 'SQL Server', icon: 'server-outline', type: 'Ionicons', color: '#4DB33D' },
    { name: 'Git', icon: 'git', type: 'FontAwesome', color: '#F05032' },
    { name: 'Android', icon: 'android', type: 'FontAwesome', color: '#3DDC84' },
    { name: 'Firebase', icon: 'flame', type: 'Ionicons', color: '#FFCA28' },
  ];

  const projects = [
    {
      title: 'Banano',
      description: 'Sitio web personal con sistema solar interactivo',
      icon: 'laptop',
      type: 'FontAwesome',
      color: '#3b82f6',
      tags: ['React', 'Three.js']
    },
    {
      title: 'App Móvil',
      description: 'Aplicación React Native para gestión de tareas',
      icon: 'mobile',
      type: 'FontAwesome',
      color: '#10b981',
      tags: ['React Native', 'Firebase']
    },
    {
      title: 'API REST',
      description: 'Backend Spring Boot con autenticación JWT',
      icon: 'server',
      type: 'FontAwesome',
      color: '#8b5cf6',
      tags: ['Spring Boot', 'MongoDB']
    }
  ];

  const contactInfo = [
    { icon: 'envelope', type: 'FontAwesome', text: 'ejemplo@gmail.com', link: 'mailto:ejemplo@gmail.com' },
    { icon: 'phone', type: 'FontAwesome', text: '+123 456 7890', link: 'tel:+1234567890' },
    { icon: 'logo-linkedin', type: 'Ionicons', text: 'linkedin.com/in/esteban', link: 'https://linkedin.com/in/esteban' },
    { icon: 'logo-github', type: 'Ionicons', text: 'github.com/esteban', link: 'https://github.com/esteban' },
  ];

  const renderIcon = (type, name, size, color) => {
    switch (type) {
      case 'FontAwesome':
        return <FontAwesome name={name} size={size} color={color} />;
      case 'Ionicons':
        return <Ionicons name={name} size={size} color={color} />;
      default:
        return <FontAwesome name="question-circle" size={size} color={color} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.navLinks}>
          {['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'].map((section, i) => (
            <TouchableOpacity
              key={i}
              style={styles.navButton}
              onPress={() => handleNavPress(section)}
            >
              <Text style={[styles.navItem, i === 0 && styles.activeNavItem]}>
                {section}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Text style={styles.greeting}>Hola Mundo, Soy Gabriel</Text>
          <Text style={styles.title}>Ingeniero en Sistemas y Desarrollador Móvil y Web</Text>
          <Text style={styles.description}>
            Apasionado por crear soluciones digitales innovadoras y funcionales que impacten positivamente al usuario final.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}>Descargar CV</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => scrollToSection('contacto')}
            >
              <Text style={styles.secondaryButtonText}>Contáctame</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')} style={styles.socialIcon}>
              <Ionicons name="logo-linkedin" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com')} style={styles.socialIcon}>
              <Ionicons name="logo-github" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:ejemplo@gmail.com')} style={styles.socialIcon}>
              <FontAwesome name="envelope" size={24} color="#ffffff" />
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
                <FontAwesome name="user" size={28} color="#3b82f6" />
              </View>
              <Text style={styles.cardTitle}>¿Quién soy?</Text>
              <Text style={styles.cardText}>
                Soy Ingeniero en Sistemas y Desarrollador Móvil y Web con experiencia en liderazgo de grupos de trabajo.
              </Text>
            </View>

            <View style={[styles.aboutCard, styles.cardSecondary]}>
              <View style={[styles.iconBackground, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
                <FontAwesome name="flag" size={28} color="#10b981" />
              </View>
              <Text style={styles.cardTitle}>Mi Objetivo</Text>
              <Text style={styles.cardText}>
                Aplicar mis conocimientos y continuar aprendiendo para aportar valor en cada proyecto.
              </Text>
            </View>

            <View style={[styles.aboutCard, styles.cardTertiary]}>
              <View style={[styles.iconBackground, { backgroundColor: 'rgba(139, 92, 246, 0.15)' }]}>
                <FontAwesome name="star" size={28} color="#8b5cf6" />
              </View>
              <Text style={styles.cardTitle}>Mi Perfil</Text>
              <Text style={styles.cardText}>
                Me caracterizo por trabajar en equipo, adaptarme rápido a nuevas tecnologías y entregar productos de calidad.
              </Text>
            </View>
          </View>

          {/* Habilidades Técnicas */}
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsTitle}>Mis Habilidades Técnicas</Text>
            <Text style={styles.skillsDescription}>
              Tecnologías y herramientas con las que trabajo regularmente
            </Text>
            <View style={styles.skillsGrid}>
              {technicalSkills.map((skill, index) => (
                <View key={index} style={styles.skillItem}>
                  {renderIcon(skill.type, skill.icon, 32, skill.color)}
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
                  {renderIcon(project.type, project.icon, 24, project.color)}
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
                {renderIcon(item.type, item.icon, 20, '#60a5fa')}
                <Text style={styles.contactText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 60 },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  navLinks: { flexDirection: 'row' },
  navButton: { marginLeft: 25 },
  navItem: { color: '#94a3b8', fontSize: 15, fontWeight: '600', paddingVertical: 8, paddingHorizontal: 5 },
  activeNavItem: { color: '#60a5fa', borderBottomWidth: 2, borderBottomColor: '#60a5fa' },

  heroContainer: { paddingHorizontal: 30, paddingTop: 40, paddingBottom: 80, minHeight: height * 0.8, justifyContent: 'center' },
  greeting: { color: '#60a5fa', fontSize: 18, fontWeight: '600', marginBottom: 10 },
  title: { color: '#f8fafc', fontSize: 42, fontWeight: '800', marginBottom: 20 },
  description: { color: '#cbd5e1', fontSize: 18, marginBottom: 40, maxWidth: 600 },

  buttonContainer: { flexDirection: 'row', marginBottom: 50 },
  primaryButton: { backgroundColor: '#3b82f6', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 12, marginRight: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  secondaryButton: { backgroundColor: 'transparent', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 12, borderWidth: 2, borderColor: '#3b82f6' },
  secondaryButtonText: { color: '#3b82f6', fontSize: 16, fontWeight: '600' },

  socialContainer: { flexDirection: 'row', marginBottom: 60 },
  socialIcon: { width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(59,130,246,0.1)', alignItems: 'center', justifyContent: 'center', marginRight: 20 },

  section: { paddingHorizontal: 30, paddingVertical: 60 },
  sectionHeader: { marginBottom: 50, alignItems: 'center' },
  sectionSubtitle: { color: '#60a5fa', fontSize: 16, fontWeight: '600', marginBottom: 8 },
  sectionTitle: { color: '#f8fafc', fontSize: 36, fontWeight: '800', marginBottom: 12, textAlign: 'center' },

  aboutCardsContainer: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  aboutCard: { width: width < 768 ? '100%' : '30%', backgroundColor: 'rgba(30,41,59,0.8)', borderRadius: 20, padding: 30, marginBottom: 20, borderWidth: 1, borderColor: '#334155', alignItems: 'center' },
  cardPrimary: { borderColor: 'rgba(59,130,246,0.3)' },
  cardSecondary: { borderColor: 'rgba(16,185,129,0.3)' },
  cardTertiary: { borderColor: 'rgba(139,92,246,0.3)' },

  iconBackground: { width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 15, textAlign: 'center' },
  cardText: { color: '#cbd5e1', fontSize: 15, textAlign: 'center' },

  skillsContainer: { backgroundColor: 'rgba(30, 41, 59, 0.8)', borderRadius: 20, padding: 30, borderWidth: 1, borderColor: '#334155' },
  skillsTitle: { color: '#fff', fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 10 },
  skillsDescription: { color: '#94a3b8', fontSize: 16, textAlign: 'center', marginBottom: 30 },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  skillItem: { alignItems: 'center', width: width < 768 ? '25%' : '16.66%', marginBottom: 30, paddingHorizontal: 10 },
  skillName: { color: '#cbd5e1', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 5 },

  projectsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: width < 768 ? 'center' : 'space-between' },
  projectCard: { width: width < 768 ? '100%' : '30%', backgroundColor: 'rgba(30, 41, 59, 0.8)', borderRadius: 16, padding: 25, marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  projectHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  projectTitle: { color: '#fff', fontSize: 20, fontWeight: '700', marginLeft: 12 },
  projectDesc: { color: '#94a3b8', fontSize: 15, lineHeight: 22, marginBottom: 20 },
  projectTags: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: { backgroundColor: 'rgba(59, 130, 246, 0.15)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8, marginBottom: 8 },
  tagText: { color: '#60a5fa', fontSize: 12, fontWeight: '600' },

  contactInfo: { backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: 16, padding: 30, marginBottom: 40, borderWidth: 1, borderColor: '#334155' },
  contactItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  contactText: { color: '#cbd5e1', fontSize: 16, marginLeft: 15 },
});
