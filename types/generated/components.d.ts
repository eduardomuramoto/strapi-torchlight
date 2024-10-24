import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderingOrderedService extends Schema.Component {
  collectionName: 'components_ordering_ordered_services';
  info: {
    displayName: 'Ordered Service';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    services: Attribute.Relation<
      'ordering.ordered-service',
      'oneToMany',
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
    courses: Attribute.Relation<
      'ordering.ordered-course',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface CourseComponentsDuration extends Schema.Component {
  collectionName: 'components_course_components_durations';
  info: {
    displayName: 'Duration';
  };
  attributes: {
    value: Attribute.Integer;
    unit: Attribute.Enumeration<['hour', 'day', 'week']>;
  };
}

export interface CourseComponentsCourseObjective extends Schema.Component {
  collectionName: 'components_course_components_course_objectives';
  info: {
    displayName: 'Course Objective';
    icon: 'check';
  };
  attributes: {
    Objective: Attribute.String;
    Icon: Attribute.Enumeration<['Understand', 'Chat', 'Indentify']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordering.ordered-service': OrderingOrderedService;
      'ordering.ordered-course': OrderingOrderedCourse;
      'course-components.duration': CourseComponentsDuration;
      'course-components.course-objective': CourseComponentsCourseObjective;
    }
  }
}
