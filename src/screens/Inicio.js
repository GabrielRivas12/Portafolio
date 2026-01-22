import React, { useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function Inicio() {
    const scrollViewRef = useRef(null);

    const scrollToSection = (section) => {
        const sections = {
            'inicio': 0,
            'sobreMi': height * 0.7,
            'proyectos': height * 0.7 + 1350,
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
         { name: 'React Native', icon: 'react', color: '#61DAFB', type: 'material' },
        { name: 'JavaScript', icon: 'language-javascript', color: '#F7DF1E', type: 'material' },
        { name: 'Java', icon: 'language-java', color: '#007396', type: 'material' },
        { name: 'C#', icon: 'language-csharp', color: '#9B4F96', type: 'material' },
        { name: '.NET', icon: 'dot-net', color: '#512BD4', type: 'material' },
        { name: 'Python', icon: 'language-python', color: '#3776AB', type: 'material' },
        { name: 'Spring Boot', icon: 'leaf', color: '#6DB33F', type: 'material' },
        { name: 'HTML5', icon: 'language-html5', color: '#E34F26', type: 'material' },
        { name: 'CSS3', icon: 'language-css3', color: '#1572B6', type: 'material' },
        { name: 'MySQL', icon: 'database', color: '#336791', type: 'fontawesome' },
        { name: 'SQL Server', icon: 'database-outline', color: '#4DB33D', type: 'material' },
        { name: 'Git', icon: 'git', color: '#F05032', type: 'fontawesome' },
        { name: 'Android', icon: 'android', color: '#3DDC84', type: 'fontawesome' },
        { name: 'Firebase', icon: 'firebase', color: '#FFCA28', type: 'material' },

       
    ];

    const renderIcon = (skill) => {
        switch (skill.type) {
            case 'material':
                return <MaterialIcon name={skill.icon} size={32} color={skill.color} />;
            case 'ionicon':
                return <Ionicon name={skill.icon} size={32} color={skill.color} />;
            case 'fontawesome':
            default:
                return <Icon name={skill.icon} size={32} color={skill.color} />;
        }
    };

    return (
        <View style={styles.container}>
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
                <View style={styles.heroContainer}>
                    <View style={styles.heroContent}>
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
                            <TouchableOpacity style={styles.socialIcon}>
                                <Icon name="linkedin" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIcon}>
                                <Icon name="github" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIcon}>
                                <Icon name="envelope" size={24} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionSubtitle}>Conóceme mejor</Text>
                        <Text style={styles.sectionTitle}>Sobre Mí</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    
                    <View style={styles.aboutCardsContainer}>
                        <View style={[styles.aboutCard, styles.cardPrimary]}>
                            <View style={styles.cardIconContainer}>
                                <View style={[styles.iconBackground, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
                                    <Icon name="user" size={28} color="#3b82f6" />
                                </View>
                            </View>
                            <Text style={styles.cardTitle}>¿Quién soy?</Text>
                            <Text style={styles.cardText}>
                                Soy Ingeniero en Sistemas y Desarrollador Móvil y Web con experiencia en liderazgo de 
                                grupos de trabajo para el desarrollo de proyectos de innovación. Poseo conocimientos 
                                sólidos en desarrollo de software y diseño de interfaces.
                            </Text>
                        </View>

                        <View style={[styles.aboutCard, styles.cardSecondary]}>
                            <View style={styles.cardIconContainer}>
                                <View style={[styles.iconBackground, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
                                    <Icon name="flag" size={28} color="#10b981" />
                                </View>
                            </View>
                            <Text style={styles.cardTitle}>Mi Objetivo</Text>
                            <Text style={styles.cardText}>
                                Aplicar mis conocimientos y continuar aprendiendo para adquirir experiencia 
                                en las distintas áreas de mi profesión, aportando valor en cada proyecto y 
                                desarrollando soluciones que marquen la diferencia.
                            </Text>
                        </View>

                        <View style={[styles.aboutCard, styles.cardTertiary]}>
                            <View style={styles.cardIconContainer}>
                                <View style={[styles.iconBackground, { backgroundColor: 'rgba(139, 92, 246, 0.15)' }]}>
                                    <Icon name="star" size={28} color="#8b5cf6" />
                                </View>
                            </View>
                            <Text style={styles.cardTitle}>Mi Perfil</Text>
                            <Text style={styles.cardText}>
                                Me caracterizo por mi capacidad de trabajar en equipo, responsabilidad, 
                                adaptación rápida a nuevas tecnologías, atención al detalle y compromiso 
                                con la entrega del producto final de calidad.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.skillsContainer}>
                        <View style={styles.skillsHeader}>
                            <MaterialIcon name="code-braces" size={28} color="#60a5fa" />
                            <Text style={styles.skillsTitle}>Mis Habilidades Técnicas</Text>
                        </View>
                        <Text style={styles.skillsDescription}>
                            Tecnologías y herramientas con las que trabajo regularmente
                        </Text>
                        
                        <View style={styles.skillsGrid}>
                            {technicalSkills.map((skill, index) => (
                                <View key={index} style={styles.skillItem}>
                                    <View style={[styles.skillIconContainer, { borderColor: `${skill.color}40` }]}>
                                        {renderIcon(skill)}
                                    </View>
                                    <Text style={styles.skillName}>{skill.name}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionSubtitle}>Mis trabajos recientes</Text>
                        <Text style={styles.sectionTitle}>Proyectos</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    
                    <View style={styles.projectsContainer}>
                        <View style={styles.projectCard}>
                            <View style={styles.projectHeader}>
                                <Icon name="laptop" size={24} color="#3b82f6" />
                                <Text style={styles.projectTitle}> Banano</Text>
                            </View>
                            <Text style={styles.projectDesc}>Sitio web personal con sistema solar interactivo</Text>
                            <View style={styles.projectTags}>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>React</Text>
                                </View>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>Three.js</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.projectCard}>
                            <View style={styles.projectHeader}>
                                <Icon name="mobile" size={24} color="#10b981" />
                                <Text style={styles.projectTitle}>App Móvil</Text>
                            </View>
                            <Text style={styles.projectDesc}>Aplicación React Native para gestión de tareas</Text>
                            <View style={styles.projectTags}>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>React Native</Text>
                                </View>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>Firebase</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.projectCard}>
                            <View style={styles.projectHeader}>
                                <Icon name="server" size={24} color="#8b5cf6" />
                                <Text style={styles.projectTitle}>API REST</Text>
                            </View>
                            <Text style={styles.projectDesc}>Backend Spring Boot con autenticación JWT</Text>
                            <View style={styles.projectTags}>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>Spring Boot</Text>
                                </View>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>MongoDB</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionSubtitle}>Ponte en contacto</Text>
                        <Text style={styles.sectionTitle}>Contacto</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    
                    <View style={styles.contactInfo}>
                        <View style={styles.contactItem}>
                            <Icon name="envelope" size={20} color="#60a5fa" />
                            <Text style={styles.contactText}>ejemplo@gmail.com</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Icon name="phone" size={20} color="#60a5fa" />
                            <Text style={styles.contactText}>+123 456 7890</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Icon name="linkedin" size={20} color="#60a5fa" />
                            <Text style={styles.contactText}>linkedin.com/in/esteban</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Icon name="github" size={20} color="#60a5fa" />
                            <Text style={styles.contactText}>github.com/esteban</Text>
                        </View>
                    </View>

                    <View style={styles.contactForm}>
                        <Text style={styles.formTitle}>Envíame un mensaje</Text>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Nombre</Text>
                            <View style={styles.formInput} />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Email</Text>
                            <View style={styles.formInput} />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Mensaje</Text>
                            <View style={[styles.formInput, { height: 100 }]} />
                        </View>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
                            <Icon name="paper-plane" size={16} color="#fff" style={styles.submitIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 60,
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
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    brand: {
        color: '#60a5fa',
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: 1,
    },
    navLinks: {
        flexDirection: 'row',
    },
    navButton: {
        marginLeft: 25,
    },
    navItem: {
        color: '#94a3b8',
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    activeNavItem: {
        color: '#60a5fa',
        borderBottomWidth: 2,
        borderBottomColor: '#60a5fa',
    },

    // Hero Section
    heroContainer: {
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 80,
        minHeight: height * 0.8,
        justifyContent: 'center',
    },
    heroContent: {
        maxWidth: 800,
    },
    greeting: {
        color: '#60a5fa',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1,
        marginBottom: 10,
    },
    title: {
        color: '#f8fafc',
        fontSize: 42,
        fontWeight: '800',
        lineHeight: 50,
        marginBottom: 20,
    },
    description: {
        color: '#cbd5e1',
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 40,
        maxWidth: 600,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 50,
    },
    primaryButton: {
        backgroundColor: '#3b82f6',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 12,
        marginRight: 20,
        elevation: 4,
        shadowColor: '#3b82f6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#3b82f6',
    },
    secondaryButtonText: {
        color: '#3b82f6',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    socialContainer: {
        flexDirection: 'row',
    },
    socialIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'rgba(59, 130, 246, 0.3)',
    },

    // Secciones generales
    section: {
        paddingHorizontal: 30,
        paddingVertical: 60,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        borderTopWidth: 1,
        borderTopColor: '#1e293b',
    },
    sectionHeader: {
        marginBottom: 50,
        alignItems: 'center',
    },
    sectionSubtitle: {
        color: '#60a5fa',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
        marginBottom: 8,
        textAlign: 'center',
    },
    sectionTitle: {
        color: '#f8fafc',
        fontSize: 36,
        fontWeight: '800',
        letterSpacing: 0.5,
        textAlign: 'center',
        marginBottom: 12,
    },
    titleUnderline: {
        width: 60,
        height: 4,
        backgroundColor: '#3b82f6',
        borderRadius: 2,
    },
    
    // Tarjetas Sobre Mí
    aboutCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 60,
    },
    aboutCard: {
        width: width < 768 ? '100%' : '31%',
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        borderRadius: 20,
        padding: 30,
        marginBottom: 20,
        borderWidth: 1,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
    },
    cardPrimary: {
        borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    cardSecondary: {
        borderColor: 'rgba(16, 185, 129, 0.3)',
    },
    cardTertiary: {
        borderColor: 'rgba(139, 92, 246, 0.3)',
    },
    cardIconContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    iconBackground: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 15,
        textAlign: 'center',
    },
    cardText: {
        color: '#cbd5e1',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
    },

    // Sección de Habilidades Técnicas
    skillsContainer: {
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        borderRadius: 20,
        padding: 30,
        borderWidth: 1,
        borderColor: '#334155',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
    },
    skillsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    skillsTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 12,
        textAlign: 'center',
    },
    skillsDescription: {
        color: '#94a3b8',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    skillItem: {
        alignItems: 'center',
        width: width < 768 ? '25%' : '16.66%',
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    skillIconContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        borderWidth: 1,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    skillName: {
        color: '#cbd5e1',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 5,
    },

    // Proyectos
    projectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: width < 768 ? 'center' : 'space-between',
    },
    projectCard: {
        width: width < 768 ? '100%' : '31%',
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        borderRadius: 16,
        padding: 25,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#334155',
    },
    projectHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    projectTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 12,
    },
    projectDesc: {
        color: '#94a3b8',
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 20,
    },
    projectTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        color: '#60a5fa',
        fontSize: 12,
        fontWeight: '600',
    },

    // Contacto
    contactInfo: {
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        borderRadius: 16,
        padding: 30,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#334155',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    contactText: {
        color: '#cbd5e1',
        fontSize: 16,
        marginLeft: 15,
    },

    // Formulario de contacto
    contactForm: {
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        borderRadius: 16,
        padding: 30,
        borderWidth: 1,
        borderColor: '#334155',
    },
    formTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 25,
    },
    formGroup: {
        marginBottom: 20,
    },
    formLabel: {
        color: '#cbd5e1',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '600',
    },
    formInput: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#475569',
        height: 50,
        paddingHorizontal: 15,
    },
    submitButton: {
        backgroundColor: '#3b82f6',
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        flexDirection: 'row',
        elevation: 4,
        shadowColor: '#3b82f6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    submitIcon: {
        marginLeft: 10,
    },
});

if (width < 768) {
    styles.heroContainer.paddingHorizontal = 20;
    styles.title.fontSize = 32;
    styles.section.paddingHorizontal = 20;
    styles.sectionTitle.fontSize = 28;
    styles.aboutCard.marginBottom = 15;
    styles.projectCard.marginBottom = 15;
    styles.navbar.paddingHorizontal = 20;
    styles.navButton.marginLeft = 15;
    styles.skillItem.width = '33.33%';
}

if (width < 480) {
    styles.buttonContainer.flexDirection = 'column';
    styles.primaryButton.marginRight = 0;
    styles.primaryButton.marginBottom = 15;
    styles.primaryButton.width = '100%';
    styles.secondaryButton.width = '100%';
    styles.navLinks.flexDirection = 'column';
    styles.navButton.marginLeft = 0;
    styles.navButton.marginBottom = 10;
    styles.skillItem.width = '50%';
    styles.aboutCardsContainer.flexDirection = 'column';
    styles.aboutCard.width = '100%';
    styles.projectCard.width = '100%';
}