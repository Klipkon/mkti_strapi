import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
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
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
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
      'sections.hero': SectionsHero;
      'components.social-media-link': ComponentsSocialMediaLink;
      'components.navigation-link': ComponentsNavigationLink;
      'components.button': ComponentsButton;
      'components.badge': ComponentsBadge;
    }
  }
}
