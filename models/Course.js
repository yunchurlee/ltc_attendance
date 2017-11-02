const bookshelf = require('../config/bookshelf').bookshelf;

class Course extends bookshelf.Model {

    get tableName() {
        return 'course';
    }

    get hasTimestamps() {
        return true;
    }

    get checkIns() {
        return this.hasMany('CheckIn', 'course_id');
    }

    get instructors() {
        return this.belongsToMany('User', 'course_instructor', 'course_id');
    }
}

class Courses extends bookshelf.Collection {
    get model() {
        return Course;
    }
}

module.exports = {
    Course: Course,
    Courses: Courses
};
