import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBadge extends Struct.ComponentSchema {
  collectionName: 'components_components_badges';
  info: {
    displayName: 'badge';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['default', 'sm', 'icon']> &
      Schema.Attribute.DefaultTo<'default'>;
    variant: Schema.Attribute.Enumeration<['default', 'secondary', 'ghost']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'expand';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsChip extends Struct.ComponentSchema {
  collectionName: 'components_components_chips';
  info: {
    displayName: 'chip';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface ComponentsForm extends Struct.ComponentSchema {
  collectionName: 'components_components_forms';
  info: {
    description: '';
    displayName: 'form';
    icon: 'envelop';
  };
  attributes: {
    checkboxLabel: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
  };
}

export interface ComponentsMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_components_markdowns';
  info: {
    displayName: 'markdown';
    icon: 'strikeThrough';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ComponentsNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_components_navigation_links';
  info: {
    description: '';
    displayName: 'navigation link';
    icon: 'code';
  };
  attributes: {
    content: Schema.Attribute.String;
    href: Schema.Attribute.String;
  };
}

export interface ComponentsSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_media_links';
  info: {
    description: '';
    displayName: 'social media link';
    icon: 'earth';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface ComponentsTitleWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_components_title_with_descriptions';
  info: {
    displayName: 'title with description';
    icon: 'strikeThrough';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_uses';
  info: {
    description: '';
    displayName: 'about us';
    icon: 'user';
  };
  attributes: {
    chips: Schema.Attribute.Component<'components.chip', true>;
    description: Schema.Attribute.Text;
    highlightedWords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutUsCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_us_cards';
  info: {
    displayName: 'about us cards';
    icon: 'bulletList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBlog extends Struct.ComponentSchema {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blog';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'strikeThrough';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'components.button', true>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    titleWithDescription: Schema.Attribute.Component<
      'components.title-with-description',
      false
    >;
  };
}

export interface SectionsWithImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_with_images';
  info: {
    description: '';
    displayName: 'with image';
    icon: 'picture';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titleWithDescription: Schema.Attribute.Component<
      'components.title-with-description',
      false
    >;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.badge': ComponentsBadge;
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.chip': ComponentsChip;
      'components.form': ComponentsForm;
      'components.markdown': ComponentsMarkdown;
      'components.navigation-link': ComponentsNavigationLink;
      'components.social-media-link': ComponentsSocialMediaLink;
      'components.title-with-description': ComponentsTitleWithDescription;
      'sections.about-us': SectionsAboutUs;
      'sections.about-us-cards': SectionsAboutUsCards;
      'sections.blog': SectionsBlog;
      'sections.contact': SectionsContact;
      'sections.hero': SectionsHero;
      'sections.with-image': SectionsWithImage;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
