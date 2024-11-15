import type { Schema, Struct } from '@strapi/strapi';

export interface ClientsClients extends Struct.ComponentSchema {
  collectionName: 'components_clients_clients';
  info: {
    displayName: 'Clients';
  };
  attributes: {
    Icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Maintext: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MainContent: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface NavbarNavbar extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    buttons: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'clients.clients': ClientsClients;
      'hero.hero': HeroHero;
      'navbar.navbar': NavbarNavbar;
    }
  }
}
