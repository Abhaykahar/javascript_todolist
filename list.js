let data = [

];

const viewuser = () => {
    let tbl = "";
    data.map((val) => {
        return (
            tbl += `
                <tr>
                
                <td>${val.userid}</td>
                <td>${val.name}</td>
                <td>${val.course}</td>
                <td>
                
                <p onclick="deletedata(${val.userid})"><i class="fa-solid fa-trash"></i></p>
                ||
                <p onclick="edituser(${val.userid})"><i class="fa-solid fa-pen-to-square"></i></p>

                </td>
                
                </tr>
            `
        );
    });
    document.getElementById('record').innerHTML = tbl;
}
viewuser();

const adduser = () => {
    let fname = document.getElementById('username').value;
    let fcourse = document.getElementById('course').value;
    let id = document.getElementById('editid').value;

    let obj = {
        userid: Math.floor(Math.random() * 1000),
        name: fname,
        course: fcourse,
    }

    if (!fname || !fcourse) {
        alert("Please enter valid details");
        return false;
    }

    if (id) {
        data = data.map((val) => {
            if (val.userid == id) {
                val.name = fname;
                val.course = fcourse;
            }
            return val;
        });
        alert("Edit successful...");
        document.getElementById('editid').value='';
        viewuser();
    } else {
        data.push(obj);
        alert("User added successfully...");
        viewuser();
    }

    document.getElementById('username').value = "";
    document.getElementById('course').value = "";
}

const deletedata = (id) => {
    data = data.filter((val) => {
        return val.userid != id;
    });
    alert("User deleted successfully...");
    viewuser();
}

const edituser = (id) => {
    let edit = data.find((val) => {
        return val.userid === id;
    });
    document.getElementById('username').value = edit.name;
    document.getElementById('course').value = edit.course;
    document.getElementById('editid').value = id;
}
