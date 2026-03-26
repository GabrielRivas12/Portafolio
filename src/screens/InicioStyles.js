import { StyleSheet } from 'react-native';

export const getStyles = (w, h) => StyleSheet.create({
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
    paddingHorizontal: w < 768 ? 20 : 30,
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
    marginLeft: w < 768 ? 15 : 25,
    alignItems: 'center',
  },
  navItem: {
    color: '#94a3b8',
    fontSize: w < 768 ? 14 : 15,
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
    paddingHorizontal: w < 768 ? 20 : 30,
    paddingTop: 40,
    paddingBottom: 80,
    minHeight: h * 0.8,
    justifyContent: 'center'
  },
  greeting: {
    color: '#60a5fa',
    fontSize: w < 768 ? 16 : 18,
    fontWeight: '600',
    marginBottom: 10
  },
  title: {
    color: '#f8fafc',
    fontSize: w < 768 ? 32 : w < 1024 ? 38 : 42,
    fontWeight: '800',
    marginBottom: 20
  },
  description: {
    color: '#cbd5e1',
    fontSize: w < 768 ? 16 : 18,
    marginBottom: 40,
    maxWidth: w < 768 ? '100%' : 600
  },

  buttonContainer: {
    flexDirection: w < 768 ? 'column' : 'row',
    marginBottom: 50,
    alignItems: w < 768 ? 'center' : 'flex-start'
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: w < 768 ? 24 : 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginRight: w < 768 ? 0 : 20,
    marginBottom: w < 768 ? 15 : 0
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: w < 768 ? 24 : 32,
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
    marginBottom: 60,
    justifyContent: w < 768 ? 'center' : 'flex-start'
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
    paddingHorizontal: w < 768 ? 20 : 30,
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
    fontSize: w < 768 ? 28 : w < 1024 ? 32 : 36,
    fontWeight: '800',
    marginBottom: 12,
    textAlign: 'center'
  },

  aboutCardsContainer: {
    flexDirection: w < 768 ? 'column' : 'row',
    justifyContent: w < 768 ? 'center' : 'space-between',
    flexWrap: 'wrap'
  },
  aboutCard: {
    width: w < 768 ? '100%' : w < 1024 ? '45%' : '30%',
    backgroundColor: 'rgba(30,41,59,0.8)',
    borderRadius: 20,
    padding: w < 768 ? 20 : 30,
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
    fontSize: w < 768 ? 20 : 22,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center'
  },
  cardText: {
    color: '#cbd5e1',
    fontSize: w < 768 ? 14 : 15,
    textAlign: 'center'
  },

  skillsContainer: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 20,
    padding: w < 768 ? 20 : 30,
    borderWidth: 1,
    borderColor: '#334155'
  },
  skillsTitle: {
    color: '#fff',
    fontSize: w < 768 ? 22 : 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10
  },
  skillsDescription: {
    color: '#94a3b8',
    fontSize: w < 768 ? 14 : 16,
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
    width: w < 768 ? '25%' : '16.66%',
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
    justifyContent: w < 768 ? 'center' : 'space-between'
  },
  projectCard: {
    width: w < 768 ? '100%' : w < 1024 ? '100%' : '48%',
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 16,
    padding: w < 768 ? 20 : 25,
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
    fontSize: w < 768 ? 18 : 20,
    fontWeight: '700',
    marginLeft: 12
  },
  projectDesc: {
    color: '#94a3b8',
    fontSize: w < 768 ? 14 : 15,
    lineHeight: 22,
    marginBottom: 20
  },
  carousel: {
    marginBottom: 20,
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
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: '600'
  },

  contactInfo: {
    alignItems: 'center'
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    width: w < 768 ? '100%' : 'auto',
    minWidth: w < 768 ? 'auto' : 300
  },
  contactText: {
    color: '#cbd5e1',
    fontSize: 16,
    marginLeft: 15
  },

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
