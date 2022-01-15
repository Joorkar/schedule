school = [];
courses = [];
teachers = [];
classrooms = [];


//cache de nombres
cachename = ["","",""];
//Crea una lista temporal de maestros
mastertem = [];
//Crea una lista temporal de clases
Listtem = [];
//Crea una lista temporal de relaciones
relationshipstem = [];

//Cambia de color los botones
function BtnColor(elem) {
    btnx = ["btnClases", "btnSecciones", "btnMaestros"].forEach(element => {
        if (element != elem) {
            document.getElementById(element).style.background = 'black';
        } else {
            document.getElementById(element).style.background = 'green';
        }
    });
    CleanDescription(elem);
}

//Agrega lista de mestros en la descripcion
function btninfoback() {
    var info = `<p>Clases: </p>`;
    courses.forEach(element => {
        var ischecked = "";
        if (mastertem.indexOf(element.Name) != -1) {
            ischecked = "checked"
        }
        info += `<div class="checkbox"><input type="checkbox" onclick="tolmastertem('${element.Name}')" name="check_lista[]" value="${element.Name}" ${ischecked}>${element.Name}</div>  -->`; // Cambiar --> icono
        
        var result = teachers.filter(word => word.Courses.includes(element.Name) == true);
        
        result.forEach(asd => {
            info += `<div class="checkbox"><input type="checkbox" onclick="tolmastertem('${asd.Name}')" name="check_lista[]" value="${asd.Name}">${asd.Name}</div> `;
        });
        info += "<br>"
    });
    document.getElementById("infovar").innerHTML = info;
}

//Agrega lista de mestros en la descripcion
function AgregarClasesYMaestros() {
    var info = `<p>Clses: </p>`;
    teachers.forEach(element => {
        var ischecked = "";
        if (mastertem.indexOf(element.Name) != -1) {
            ischecked = "checked"
        }
        info += `<div class="checkbox"><input type="checkbox" onclick="tolmastertem('${element.Name}')" name="check_lista[]" value="${element.Name}" ${ischecked}>${element.Name}</div> `;
    });
    document.getElementById("infovar").innerHTML = info;
}


//Agrega lista de claces por mestros en la descripcion
function btninnext() {
    var info = `<p>Clases: </p>`;
    teachers.forEach(element => {
        var ischecked = "";
        if (mastertem.indexOf(element.Name) != -1) {
            ischecked = "checked"
        }
        info += `<div class="checkbox"><input type="checkbox" onclick="tolmastertem('${element.Name}')" name="check_lista[]" value="${element.Name}" ${ischecked}>${element.Name}</div> `;
    });
    document.getElementById("infovar").innerHTML = info;
}





//Limpia la descripcion
function CleanDescription(elem) {
    switch (elem) {
        case "btnClases":
            document.getElementById("container-right__description").innerHTML = `
            <div class="container-right__description__first">
            <p> Agregar una nueva clase </p>
        </div>
        <div class="container-right__description__div">
            Para agregar una nueva clace escribe su nombre en el siguiente campo
            y da clic sobre el boton <b>"Agregar a la lista"</b>
        </div>
        <div class="container-right__description__info">
            <p>Nombre: </p>
            <input type="text" id="Campo1" oninput="addcahcename(0)">
        </div>
        <div class="container-right__description__info">
            <button class="container-left__button-right button" onclick="addCourse()"> Agregar a la lista </button>
        </div>
            `;

            document.getElementById("Campo1").value = cachename[0];

            document.getElementById("container-left-seccion-background__list").innerHTML = ``;
            courses.forEach(element => {
                document.getElementById("container-left-seccion-background__list").innerHTML += `
                <div>
                <p>${element.Name}</p>
            </div>
                `;
            });
            break;
        case "btnMaestros":
            var asd = `
            <div class="container-right__description__first">
            <p> Agregar un mestro</p>
        </div>
        <div class="container-right__description__div">
            Para agregar un maestro llena los siguientes campos
            y da clic sobre el boton <b>"Agregar a la lista"</b>
        </div>
        <div class="container-right__description__info">
            <p>Nombre: </p>
            <input type="text" id="Campo1" oninput="addcahcename(1)">
        </div>
        <div class="container-right__description__info">
            <p>Clases: </p> <br>
            <p class="che">`

            courses.forEach(element => {
                var ischecked = "";
                if (Listtem.indexOf(element.Name) != -1) {
                    ischecked = "checked"
                }
                asd += `<div class="checkbox"><input type="checkbox" onclick="tolisttem('${element.Name}')" name="check_lista[]" value="${element.Name}" ${ischecked}>${element.Name}</div> `;
            });

            asd += `
            </p>

        </div>
        <div class="container-right__description__info">
            <button class="container-left__button-right button" onclick="addTeacher()"> Agregar a la lista
            </button>
        </div>`

            

            document.getElementById("container-right__description").innerHTML = asd;

            document.getElementById("Campo1").value = cachename[1];
            document.getElementById("container-left-seccion-background__list").innerHTML = ``;
            teachers.forEach(element => {
                document.getElementById("container-left-seccion-background__list").innerHTML += `
                <div>
                <p>${element.Name}</p>
            </div>
                `;
            });

            break;
        case "btnSecciones":

            document.getElementById("container-right__description").innerHTML = `  <div class="container-right__description__first">
            <p> Agregar una nueva seccion </p>
        </div>
        <div class="container-right__description__div">
            Para agregar una nueva seccion escribe su nombre en el siguiente campo , luego selecciona los maestros
            asignados a esta nueva seccion , presionas el botos de <b>"Siguiente paso"</b> , y selecionas las
            clases
            que impartira cada meestro que elegiste , cuando seleciones cada una de las clases de los maestros
            que elegiste se abrira una ventana donde ingresaras el numero de periodos al mes corespondiente a su
            respectiva clase por seccion
            <br>
            por ultimo , da click sobre el boton <b>"Agregar a la lista"</b>
        </div>
        <div class="container-right__description__info">
            <p>Nombre: </p>
            <input type="text" id="Campo1" oninput="addcahcename(2)">
        </div>

        <div class="container-right__description__info" id="infovar">
            

        </div>

        <div class="container-right__description__info">
            <button class="container-left__button-right button" onclick="" disabled="true"> Paso anterior
            </button>
            <button class="container-left__button-right button" onclick=""> Siguiente paso
            </button>
            <button class="container-left__button-right button" onclick="" disabled="true"> Agregar a la lista
            </button>
        </div>`;


            document.getElementById("container-left-seccion-background__list").innerHTML = ``;
            classrooms.forEach(element => {
                document.getElementById("container-left-seccion-background__list").innerHTML += `
                <div>
                <p>${element.Name}</p>
            </div>
                `;
            });

            document.getElementById("Campo1").value = cachename[2];

           // btninfoback();
           btninfoback();
            break;
        default:
            document.getElementById("container-right__description").innerHTML = `4`;
            document.getElementById("container-left-seccion-background__list").innerHTML = ``;
            courses.forEach(element => {
                document.getElementById("container-left-seccion-background__list").innerHTML += `
                <div>
                <p>${element.Name}</p>
            </div>
                `;
            });
            break;
    }
}

//Crea una lista temporal de clases por maestro durante su agregacion
function tolisttem(named) {
    idex = Listtem.indexOf(named)
    if (idex != -1) {
        Listtem.splice(idex, 1);
    } else {
        Listtem.push(named);
    }
}

//Crea una lista temporal de maestros por aula durante su agregacion
function tolmastertem(named) {
    idex = mastertem.indexOf(named)
    if (idex != -1) {
        mastertem.splice(idex, 1);
    } else {
        mastertem.push(named);
    }
}

//agrega un nuevo Maestro
function addTeacher() {
    teacher = new Teacher(document.getElementById("Campo1").value, Listtem);
    teachers.push(teacher);
    Listtem = [];
    cachename[1]="";
    CleanDescription("btnMaestros")

}
//agrega un nuevo curso
function addCourse() {
    curse = new Course(document.getElementById("Campo1").value);
    courses.push(curse);
    cachename[0]="";
    CleanDescription("btnClases")
}



//funciones ersearias
function addcahcename(index) {
    cachename[parseInt(index)]=document.getElementById("Campo1").value;
}



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
    constructor(Name) {
        this.Name = Name;
    }
}

class Relationship {
    constructor(teacher, course, period) {
        this.teacher = teacher;
        this.course = course;
        this.period = period;
    }
}