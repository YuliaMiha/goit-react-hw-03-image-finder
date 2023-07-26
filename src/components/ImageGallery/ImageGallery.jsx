import PropTypes from 'prop-types';
import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.styled';

export default function ImageGallery({ gallery, onClick }) {
    



    return ("")
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};