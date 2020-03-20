var NodeJs_Dich_vu_http = require("https")
var NodeJs_Dich_vu = require("https")
const fs = require('fs');
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/daihocgiadinh.vn/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/daihocgiadinh.vn/fullchain.pem')
  };
var Luu_tru = require("./Xu_ly/XL_LUU_TRU")
//var Goi_thu = require("../Xu_ly/XL_GOI_THU_DIEN_TU")
var Port = normalizePort(process.env.PORT || 1200);
var Port_http = normalizePort(process.env.PORT || 1300);
var Xu_ly_Tham_so = require('querystring')
var webSocketServer = require('websocket').server;
var Du_lieu = {}
var Danh_sach_De_thi = Luu_tru.Doc_Danh_sach_De_thi()
var Danh_sach_Sinh_vien = Luu_tru.Doc_Danh_sach_Sinh_vien()
var Danh_sach_Sinh_vien_Thong_tin_Co_ban = Luu_tru.Doc_Danh_sach_Sinh_vien_Thong_tin_Co_ban()
var Danh_sach_Diem_Sinh_vien = Luu_tru.Doc_Danh_sach_Diem_Sinh_vien()
var Danh_sach_Cau_hoi = Luu_tru.Doc_Thu_vien_Cau_hoi();
var Danh_sach_He_thong_Lop_hoc = Luu_tru.Doc_He_thong_Lop_hoc();
var Danh_sach_Mon_hoc = Luu_tru.Doc_Danh_sach_Mon_hoc();

Danh_sach_Mon_hoc.then(Kq => {
    Du_lieu.Danh_sach_Mon_hoc = Kq;
})

Danh_sach_He_thong_Lop_hoc.then(Kq => {
    Du_lieu.Danh_sach_He_thong_Lop_hoc = Kq;
})

Danh_sach_Cau_hoi.then(Kq => {
    Du_lieu.Danh_sach_Cau_hoi = Kq;
})

Danh_sach_De_thi.then(Kq => {
    Du_lieu.Danh_sach_De_thi = Kq;
})
Danh_sach_Sinh_vien.then(Kq => {
    Du_lieu.Danh_sach_Sinh_vien = Kq;
})
Danh_sach_Sinh_vien_Thong_tin_Co_ban.then(Kq => {
    Du_lieu.Danh_sach_Sinh_vien_Thong_tin_Co_ban = Kq;
})

Danh_sach_Diem_Sinh_vien.then(Kq => {
    Du_lieu.Danh_sach_Diem_Sinh_vien = Kq;
})

var Ds_Nhat_ky = Luu_tru.Doc_Nhat_ky_login()
Du_lieu.Danh_sach_Nhat_ky = Ds_Nhat_ky;
var Dich_vu_http = NodeJs_Dich_vu_http.createServer((Yeu_cau, Dap_ung)=>{
    var Chuoi_Nhan = ""
    var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
    Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
    Yeu_cau.on('end', () => {

        var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        var Chuoi_Kq = ""
        if (Ma_so_Xu_ly == "Doc_Danh_sach_De_thi") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_De_thi = Du_lieu.Danh_sach_De_thi
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        } else if (Ma_so_Xu_ly == "Doc_Danh_sach_Sinh_vien") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Sinh_vien = Du_lieu.Danh_sach_Sinh_vien
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        } else if (Ma_so_Xu_ly == "Doc_Danh_sach_Mon_hoc") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Mon_hoc = Du_lieu.Danh_sach_Mon_hoc
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Lop_hoc") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Lop_hoc = Du_lieu.Danh_sach_He_thong_Lop_hoc
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Cau_hoi") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Cau_hoi = Du_lieu.Danh_sach_Cau_hoi
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Diem_Sinh_vien") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Diem_Sinh_vien = Du_lieu.Danh_sach_Diem_Sinh_vien
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Cau_hoi") {
            var Kq = ""
            var Cau_hoi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            var Dieu_kien = { "subject": Cau_hoi.subject }
            var Gia_tri_Cap_nhat = {
                $set: { question_list: Cau_hoi.question_list }
            }
            Du_lieu.Danh_sach_Cau_hoi.forEach(data => {
                if (data.subject == Cau_hoi.subject) {
                    data.question_list = Cau_hoi.question_list;
                }
            });
            Du_lieu.Danh_sach_Cau_hoi.question_list = Cau_hoi.question_list;
            Kq = Luu_tru.Cap_nhat_Doi_tuong("library_questions", Dieu_kien, Gia_tri_Cap_nhat)
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Thu_vien_Cau_hoi") {
            var Kq = ""
            var Cau_hoi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('library_questions', Cau_hoi);
            Du_lieu.Danh_sach_Cau_hoi.push(Cau_hoi);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Mon_hoc") {
            var Kq = ""
            var Mon_hoc = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('subject_system', Mon_hoc);
            Du_lieu.Danh_sach_Mon_hoc.push(Mon_hoc);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Khoa") {
            var Kq = ""
            var Khoa = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('class_system', Khoa);
            Du_lieu.Danh_sach_He_thong_Lop_hoc.push(Khoa);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Cap_nhat_Khoa") {
            var Kq = ""
            var Khoa = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Du_lieu.Danh_sach_He_thong_Lop_hoc.forEach(khoa => {
                if (khoa.faculty == Khoa.faculty) {
                    khoa.list_major = Khoa.list_major;
                    khoa.list_class = Khoa.list_class;
                    khoa.status = Khoa.status;
                }
            });
            var Dieu_kien = { "faculty": Khoa.faculty }
            var Gia_tri_Cap_nhat = {
                $set: { list_major: Khoa.list_major, list_class: Khoa.list_class, status: Khoa.status }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("class_system", Dieu_kien, Gia_tri_Cap_nhat)

            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }
            Chuoi_Kq = "ok";
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_De_thi") {
            var Kq = ""
            var De_thi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('exam', De_thi);
            Du_lieu.Danh_sach_De_thi.push(De_thi);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Sinh_vien") {
            var Kq = ""
            var Student = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('students', Student);
            Du_lieu.Danh_sach_Sinh_vien.push(Student);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Cap_nhat_Diem_Sinh_vien") {
            var Kq = ""
            var Sinh_vien = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Du_lieu.Danh_sach_Sinh_vien.forEach(student => {
                if (student.student_code == Sinh_vien.student_code) {
                    student.marks = Sinh_vien.marks;
                }
            });
            var Dieu_kien = { "student_code": Sinh_vien.student_code }
            var Gia_tri_Cap_nhat = {
                $set: { marks: Sinh_vien.marks }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("students", Dieu_kien, Gia_tri_Cap_nhat)

            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }
            Chuoi_Kq = "ok";
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Cap_nhat_De_thi") {
            var Kq = ""
            var De_thi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Du_lieu.Danh_sach_De_thi.forEach(exam => {
                if (exam.exam_code == De_thi.exam_code) {
                    exam.class_take_exam = De_thi.class_take_exam;
                    exam.question_list = De_thi.question_list;
                    exam.topic = De_thi.topic;
                    exam.time = De_thi.time;
                    exam.semester = De_thi.semester;
                    exam.status = De_thi.status;
                    exam.subject = De_thi.subject;
                }
            });
            var Dieu_kien = { "exam_code": De_thi.exam_code }
            var Gia_tri_Cap_nhat = {
                $set: { class_take_exam: De_thi.class_take_exam, question_list: De_thi.question_list, topic: De_thi.topic, time: De_thi.time, semester: De_thi.semester, status: De_thi.status, subject: De_thi.subject }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("exam", Dieu_kien, Gia_tri_Cap_nhat)

            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }
            Chuoi_Kq = "ok";
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Sinh_vien_Thong_tin_Co_ban") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Sinh_vien = Du_lieu.Danh_sach_Sinh_vien_Thong_tin_Co_ban
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        } else if (Ma_so_Xu_ly == "Lay_Danh_sach_Sinh_vien_Theo_MSSV") {
            var mssv = Chuoi_Nhan;
            console.log(mssv);
            var Doi_tuong_Kq = [];
            Doi_tuong_Kq = Du_lieu.Danh_sach_Sinh_vien_Thong_tin_Co_ban.find(x => x.student_code == mssv)
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Nhat_ky") {
            Chuoi_Kq = JSON.stringify(Du_lieu.Danh_sach_Nhat_ky)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Ghi_Nhat_ky") {
            var Kq = ""
            var Nhat_ky = JSON.parse(Chuoi_Nhan)
            Kq = Luu_tru.Ghi_moi_Nhat_ky(Nhat_ky.student_code, Nhat_ky)
            if (Kq == "") {
                var flag = 0;
                for (var i = 0; i < Du_lieu.Danh_sach_Nhat_ky.length; i++) {
                    if (Du_lieu.Danh_sach_Nhat_ky[i].student_code == Nhat_ky.student_code) {
                        flag++;
                        Du_lieu.Danh_sach_Nhat_ky[i] = Nhat_ky;
                    }
                }
                if (flag == 0) {
                    Du_lieu.Danh_sach_Nhat_ky.push(Nhat_ky);
                }
                Chuoi_Kq = JSON.stringify(Nhat_ky)
            }
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else {
            Chuoi_Kq = Luu_tru.Doc_Thong_tin_Dich_vu()
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
    })
})
var Dich_vu = NodeJs_Dich_vu.createServer(options,(Yeu_cau, Dap_ung) => {
    var Chuoi_Nhan = ""
    var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
    Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
    Yeu_cau.on('end', () => {

        var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        var Chuoi_Kq = ""
        if (Ma_so_Xu_ly == "Doc_Danh_sach_De_thi") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_De_thi = Du_lieu.Danh_sach_De_thi
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        } else if (Ma_so_Xu_ly == "Doc_Danh_sach_Sinh_vien") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Sinh_vien = Du_lieu.Danh_sach_Sinh_vien
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        } else if (Ma_so_Xu_ly == "Doc_Danh_sach_Mon_hoc") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Mon_hoc = Du_lieu.Danh_sach_Mon_hoc
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Lop_hoc") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Lop_hoc = Du_lieu.Danh_sach_He_thong_Lop_hoc
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Cau_hoi") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Cau_hoi = Du_lieu.Danh_sach_Cau_hoi
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Diem_Sinh_vien") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Diem_Sinh_vien = Du_lieu.Danh_sach_Diem_Sinh_vien
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Cau_hoi") {
            var Kq = ""
            var Cau_hoi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            var Dieu_kien = { "subject": Cau_hoi.subject }
            var Gia_tri_Cap_nhat = {
                $set: { question_list: Cau_hoi.question_list }
            }
            Du_lieu.Danh_sach_Cau_hoi.forEach(data => {
                if (data.subject == Cau_hoi.subject) {
                    data.question_list = Cau_hoi.question_list;
                }
            });
            Du_lieu.Danh_sach_Cau_hoi.question_list = Cau_hoi.question_list;
            Kq = Luu_tru.Cap_nhat_Doi_tuong("library_questions", Dieu_kien, Gia_tri_Cap_nhat)
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Thu_vien_Cau_hoi") {
            var Kq = ""
            var Cau_hoi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('library_questions', Cau_hoi);
            Du_lieu.Danh_sach_Cau_hoi.push(Cau_hoi);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Mon_hoc") {
            var Kq = ""
            var Mon_hoc = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('subject_system', Mon_hoc);
            Du_lieu.Danh_sach_Mon_hoc.push(Mon_hoc);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Khoa") {
            var Kq = ""
            var Khoa = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('class_system', Khoa);
            Du_lieu.Danh_sach_He_thong_Lop_hoc.push(Khoa);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Cap_nhat_Khoa") {
            var Kq = ""
            var Khoa = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Du_lieu.Danh_sach_He_thong_Lop_hoc.forEach(khoa => {
                if (khoa.faculty == Khoa.faculty) {
                    khoa.list_major = Khoa.list_major;
                    khoa.list_class = Khoa.list_class;
                    khoa.status = Khoa.status;
                }
            });
            var Dieu_kien = { "faculty": Khoa.faculty }
            var Gia_tri_Cap_nhat = {
                $set: { list_major: Khoa.list_major, list_class: Khoa.list_class, status: Khoa.status }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("class_system", Dieu_kien, Gia_tri_Cap_nhat)

            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }
            Chuoi_Kq = "ok";
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_De_thi") {
            var Kq = ""
            var De_thi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('exam', De_thi);
            Du_lieu.Danh_sach_De_thi.push(De_thi);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Them_Sinh_vien") {
            var Kq = ""
            var Student = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);

            Kq = Luu_tru.Ghi_moi_Doi_tuong('students', Student);
            Du_lieu.Danh_sach_Sinh_vien.push(Student);
            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }

            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Cap_nhat_Diem_Sinh_vien") {
            var Kq = ""
            var Sinh_vien = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Du_lieu.Danh_sach_Sinh_vien.forEach(student => {
                if (student.student_code == Sinh_vien.student_code) {
                    student.marks = Sinh_vien.marks;
                }
            });
            var Dieu_kien = { "student_code": Sinh_vien.student_code }
            var Gia_tri_Cap_nhat = {
                $set: { marks: Sinh_vien.marks }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("students", Dieu_kien, Gia_tri_Cap_nhat)

            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }
            Chuoi_Kq = "ok";
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Cap_nhat_De_thi") {
            var Kq = ""
            var De_thi = JSON.parse(Chuoi_Nhan)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Du_lieu.Danh_sach_De_thi.forEach(exam => {
                if (exam.exam_code == De_thi.exam_code) {
                    exam.class_take_exam = De_thi.class_take_exam;
                    exam.question_list = De_thi.question_list;
                    exam.topic = De_thi.topic;
                    exam.time = De_thi.time;
                    exam.semester = De_thi.semester;
                    exam.status = De_thi.status;
                    exam.subject = De_thi.subject;
                }
            });
            var Dieu_kien = { "exam_code": De_thi.exam_code }
            var Gia_tri_Cap_nhat = {
                $set: { class_take_exam: De_thi.class_take_exam, question_list: De_thi.question_list, topic: De_thi.topic, time: De_thi.time, semester: De_thi.semester, status: De_thi.status, subject: De_thi.subject }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("exam", Dieu_kien, Gia_tri_Cap_nhat)

            if (Kq == "") {
                Chuoi_Kq = "OK"
            } else {
                Chuoi_Kq = "Error"
            }
            Chuoi_Kq = "ok";
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Sinh_vien_Thong_tin_Co_ban") {
            var Doi_tuong_Kq = {}
            Doi_tuong_Kq.Danh_sach_Sinh_vien = Du_lieu.Danh_sach_Sinh_vien_Thong_tin_Co_ban
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        } else if (Ma_so_Xu_ly == "Lay_Danh_sach_Sinh_vien_Theo_MSSV") {
            var mssv = Chuoi_Nhan;
            console.log(mssv);
            var Doi_tuong_Kq = [];
            Doi_tuong_Kq = Du_lieu.Danh_sach_Sinh_vien_Thong_tin_Co_ban.find(x => x.student_code == mssv)
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Doc_Danh_sach_Nhat_ky") {
            Chuoi_Kq = JSON.stringify(Du_lieu.Danh_sach_Nhat_ky)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "Ghi_Nhat_ky") {
            var Kq = ""
            var Nhat_ky = JSON.parse(Chuoi_Nhan)
            Kq = Luu_tru.Ghi_moi_Nhat_ky(Nhat_ky.student_code, Nhat_ky)
            if (Kq == "") {
                var flag = 0;
                for (var i = 0; i < Du_lieu.Danh_sach_Nhat_ky.length; i++) {
                    if (Du_lieu.Danh_sach_Nhat_ky[i].student_code == Nhat_ky.student_code) {
                        flag++;
                        Du_lieu.Danh_sach_Nhat_ky[i] = Nhat_ky;
                    }
                }
                if (flag == 0) {
                    Du_lieu.Danh_sach_Nhat_ky.push(Nhat_ky);
                }
                Chuoi_Kq = JSON.stringify(Nhat_ky)
            }
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
        else {
            Chuoi_Kq = Luu_tru.Doc_Thong_tin_Dich_vu()
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            Dap_ung.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
            Dap_ung.setHeader('Access-Control-Allow-Credentials', true);
            Dap_ung.end(Chuoi_Kq);
        }
    })
})

Dich_vu.listen(Port,
    console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port}`)
);

Dich_vu.on('error', onError);
Dich_vu.on('listening', onListening);
Dich_vu_http.listen(Port_http,
    console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port_http}`)
);

Dich_vu_http.on('error', onError);
Dich_vu_http.on('listening', onListening);


//Websocket
var wsServer = new webSocketServer({
    httpServer: Dich_vu
});
var clients = [];
var index = 0;
wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);
    // connection.sendUTF(
    //     JSON.stringify({ type: 'history', data: "history" }));
    // if (clients.length == 0) {
    //     clients.push({ connection: connection, student_code: "000" });
    // }
    connection.on('message', function (message) {
        var flag = 0;
        var sub = {}
        sub.connection = connection;
        sub.student_code = message.utf8Data;
        // if (clients.length == 1) {
        //   index =  clients.push(sub) - 1;
        // }
        // for (var i = 0; i < clients.length; i++) {
        //     if (clients[i].student_code == message.utf8Data) {
        //         flag++;
        //     }
        // }
        // if (flag == 0) {
        clients.push(sub);
        //}

        //console.log(connection)

        if (clients.length > 0) {
            for (var i = 0; i < clients.length; i++) {
                var json = JSON.stringify({ type: 'message', data: clients[i].student_code });
                clients[i].connection.sendUTF(json);
            }
        }
        if (clients.length > 10) {
            clients.shift();
        }

    });
    connection.on('close', function (connection) {
        //clients.splice(index, 1);
        console.log("Dang xuat roi")
    });
    console.log(index)
    console.log(clients)
    //console.log(clients.length + " ket noi" + request.origin)
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof Port === 'string' ?
        'Pipe ' + Port :
        'Port ' + Port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = Dich_vu.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind);
}