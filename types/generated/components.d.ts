import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionsWithImage extends Schema.Component {
  collectionName: 'components_sections_with_images';
  info: {
    displayName: 'with image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    titleWithDescription: Attribute.Component<'components.title-with-description'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'components.button'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
    icon: 'strikeThrough';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'components.button', true>;
  };
}

export interface SectionsContact extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsBlog extends Schema.Component {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blog';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsAboutUs extends Schema.Component {
  collectionName: 'components_sections_about_uses';
  info: {
    displayName: 'about us';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    chips: Attribute.Component<'components.chip', true>;
    highlightedWords: Attribute.String;
  };
}

export interface SectionsAboutUsCards extends Schema.Component {
  collectionName: 'components_sections_about_us_cards';
  info: {
    displayName: 'about us cards';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'components.card', true>;
  };
}

export interface ComponentsTitleWithDescription extends Schema.Component {
  collectionName: 'components_components_title_with_descriptions';
  info: {
    displayName: 'title with description';
    icon: 'strikeThrough';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsSocialMediaLink extends Schema.Component {
  collectionName: 'components_components_social_media_links';
  info: {
    displayName: 'social media link';
    icon: 'earth';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    href: Attribute.String;
  };
}

export interface ComponentsNavigationLink extends Schema.Component {
  collectionName: 'components_components_navigation_links';
  info: {
    displayName: 'navigation link';
    icon: 'code';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    href: Attribute.String;
  };
}

export interface ComponentsForm extends Schema.Component {
  collectionName: 'components_components_forms';
  info: {
    displayName: 'form';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    emailPlaceholder: Attribute.String;
    messagePlaceholder: Attribute.String;
    checkboxLabel: Attribute.String;
    messageLabel: Attribute.String;
    emailLabel: Attribute.String;
  };
}

export interface ComponentsChip extends Schema.Component {
  collectionName: 'components_components_chips';
  info: {
    displayName: 'chip';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.String;
    icon: Attribute.String;
  };
}

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'expand';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
    description: '';
  };
  attributes: {
    content: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['default', 'secondary', 'ghost']> &
      Attribute.DefaultTo<'default'>;
    size: Attribute.Enumeration<['default', 'sm', 'icon']> &
      Attribute.DefaultTo<'default'>;
    href: Attribute.String;
    icon: Attribute.String;
  };
}

export interface ComponentsBadge extends Schema.Component {
  collectionName: 'components_components_badges';
  info: {
    displayName: 'badge';
    icon: 'bold';
  };
  attributes: {
    icon: Attribute.String;
    content: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'sections.with-image': SectionsWithImage;
      'sections.hero': SectionsHero;
      'sections.contact': SectionsContact;
      'sections.blog': SectionsBlog;
      'sections.about-us': SectionsAboutUs;
      'sections.about-us-cards': SectionsAboutUsCards;
      'components.title-with-description': ComponentsTitleWithDescription;
      'components.social-media-link': ComponentsSocialMediaLink;
      'components.navigation-link': ComponentsNavigationLink;
      'components.form': ComponentsForm;
      'components.chip': ComponentsChip;
      'components.card': ComponentsCard;
      'components.button': ComponentsButton;
      'components.badge': ComponentsBadge;
    }
  }
}
