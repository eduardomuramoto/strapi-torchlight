import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderingOrderedService extends Schema.Component {
  collectionName: 'components_ordering_ordered_services';
  info: {
    displayName: 'Ordered Service';
    icon: 'bulletList';
  };
  attributes: {
    service: Attribute.Relation<
      'ordering.ordered-service',
      'oneToOne',
      'api::service.service'
    >;
  };
}

export interface OrderingOrderedCourse extends Schema.Component {
  collectionName: 'components_ordering_ordered_courses';
  info: {
    displayName: 'Ordered Course';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    course: Attribute.Relation<
      'ordering.ordered-course',
      'oneToOne',
      'api::course.course'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordering.ordered-service': OrderingOrderedService;
      'ordering.ordered-course': OrderingOrderedCourse;
    }
  }
}
