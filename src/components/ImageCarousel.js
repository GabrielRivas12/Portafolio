import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ImageCarousel = ({ images, style }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const scrollRef = useRef(null);

  const itemWidth = width * (width < 768 ? 0.85 : 0.48 * 0.85);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setActiveIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  useEffect(() => {
    if (selectedImageIndex !== null || !images || images.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: nextIndex * itemWidth, animated: true });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, selectedImageIndex, images]);

  const goToIndex = (index) => {
    if (!images || images.length === 0) return;
    const boundedIndex = (index + images.length) % images.length;
    setActiveIndex(boundedIndex);
    scrollRef.current?.scrollTo({ x: boundedIndex * itemWidth, animated: true });
  };

  const goPrev = () => {
    goToIndex(activeIndex - 1);
  };

  const goNext = () => {
    goToIndex(activeIndex + 1);
  };


  return (
    <View style={[styles.container, style]}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        snapToAlignment="center"
        decelerationRate="fast"
        pagingEnabled
        onMomentumScrollEnd={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(offsetX / itemWidth);
          setActiveIndex(newIndex);
        }}
      >
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => openModal(index)}
              style={[styles.imageContainer, { width: itemWidth }]}
            >
              <Image
                source={image}
                style={styles.image}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>No hay imágenes disponibles</Text>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={!!selectedImage}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <View style={styles.closeIcon}>
              <View style={styles.closeLine1} />
              <View style={styles.closeLine2} />
            </View>
          </TouchableOpacity>

          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalNavButton} onPress={() => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)}>
              <Text style={styles.modalNavText}>{'‹'}</Text>
            </TouchableOpacity>

            <Image source={selectedImage} style={styles.fullImage} resizeMode="contain" />

            <TouchableOpacity style={styles.modalNavButton} onPress={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}>
              <Text style={styles.modalNavText}>{'›'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.modalCounter}>{`${selectedImageIndex + 1} / ${images.length}`}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  imageContainer: {
    height: 210,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1f2937',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  noImageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    borderRadius: 10,
  },
  noImageText: {
    color: '#94a3b8',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: width * 0.85,
    height: height * 0.7,
    marginHorizontal: 20,
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  modalNavButton: {
    padding: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 8,
  },
  modalNavText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  modalCounter: {
    color: '#fff',
    marginTop: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeLine1: {
    position: 'absolute',
    width: 20,
    height: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
  },
  closeLine2: {
    position: 'absolute',
    width: 20,
    height: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '-45deg' }],
  },
});

export default ImageCarousel;