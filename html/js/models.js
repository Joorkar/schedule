class Classroom {
    Order = [];
    constructor(Name, MaxValue, Relationships) {
        this.Name = Name;
        this.MaxValue = MaxValue
        this.Relationship = Relationships;
    }
}

class Teacher {
    constructor(Name, Courses) {
        this.Name = Name;
        this.Courses = Courses;
    }
}

class Course {
    constructor(name) {
        this.name = name;
    }

    temp() {
        document.getElementById("container-right__description").innerHTML = ``;
    }
}

class Relationship {
    constructor(teacher, course, period) {
        this.teacher = teacher;
        this.course = course;
        this.period = period;
    }
}