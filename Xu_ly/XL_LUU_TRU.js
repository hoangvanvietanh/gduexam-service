var File = require("fs")
var Cong_nghe = "json"
var Thu_muc_Du_lieu = "Nhat_ky_login"
    // MongoDB
var DbConnection = require('../Xu_ly/XL_KET_NOI_MONGODB');

function Doc_Thong_tin_Dich_vu() {
    var Duong_dan = "index.html"
    var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")
    return Chuoi_Thong_tin
}


class XL_LUU_TRU {

    Doc_Thong_tin_Dich_vu() {
        return Doc_Thong_tin_Dich_vu()
    }

    async Doc_Danh_sach_De_thi() {
        try {
            var db = await DbConnection.Get();
            var De_thi = await db.collection("exam").find({}).toArray()
            return De_thi
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Doc_Thu_vien_Cau_hoi() {
        try {
            var db = await DbConnection.Get();
            var De_thi = await db.collection("library_questions").find({}).toArray()
            return De_thi
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Doc_He_thong_Lop_hoc() {
        try {
            var db = await DbConnection.Get();
            var Lop_hoc = await db.collection("class_system").find({}).toArray()
            return Lop_hoc
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Doc_Danh_sach_Sinh_vien() {
        try {
            var db = await DbConnection.Get();
            var Sinh_vien = await db.collection("students").find({}).toArray()
            return Sinh_vien
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Doc_Danh_sach_Mon_hoc() {
        try {
            var db = await DbConnection.Get();
            var Sinh_vien = await db.collection("subject_system").find({}).toArray()
            return Sinh_vien
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Doc_Danh_sach_Admin() {
        try {
            var db = await DbConnection.Get();
            var Sinh_vien = await db.collection("admin").find({}).toArray()
            return Sinh_vien
        } catch (Loi) {
            console.log(Loi)
        }
    }


    async Doc_Danh_sach_Sinh_vien_Thong_tin_Co_ban() {
        try {
            var db = await DbConnection.Get();
            var Sinh_vien = await db.collection("students").find({}).project({student_code : true,password: true,identity_card_number:true,full_name: true, _id : false}).toArray()
            return Sinh_vien
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Doc_Danh_sach_Diem_Sinh_vien() {
        try {
            var db = await DbConnection.Get();
            var Sinh_vien = await db.collection("students").find({}).project({student_code : true,full_name: true, marks:true, sex:true,date_of_birth:true,place_of_birth:true,student_class:true,identity_card_number:true, _id : false}).toArray()
            return Sinh_vien
        } catch (Loi) {
            console.log(Loi)
        }
    }

    async Ghi_moi_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {

        try {
            var db = await DbConnection.Get()
            var Kq = await db.collection(Loai_Doi_tuong).insert(Doi_tuong)
            return Kq

        } catch (Loi) {
            console.log(Loi)
        }
    }
    async Cap_nhat_Doi_tuong(Loai_Doi_tuong, Bieu_thuc_dieu_kien, Gia_tri_Cap_nhat) {
        try {
            var db = await DbConnection.Get()

            var Kq = await db.collection(Loai_Doi_tuong).update(Bieu_thuc_dieu_kien, Gia_tri_Cap_nhat)

            return Kq

        } catch (Loi) {
            console.log(Loi);
        }
    }
    async Xoa_Doi_tuong(Loai_Doi_tuong, Bieu_thuc_dieu_kien) {
        try {
            var db = await DbConnection.Get()
            var Kq = await db.collection(Loai_Doi_tuong).remove(Bieu_thuc_dieu_kien);
            return Kq
        } catch (Loi) {
            console.log(Loi);
        }
    }

    Doc_Nhat_ky_login() {
        var Danh_sach = []
        var Duong_dan = Thu_muc_Du_lieu
        var Danh_sach_Ten_Tap_tin = File.readdirSync(Duong_dan, "UTF-8")
        Danh_sach_Ten_Tap_tin.forEach(Ten => {
            if (Ten.toLowerCase().endsWith(Cong_nghe)) {
                var Chuoi = File.readFileSync(Duong_dan + "//" + Ten, "UTF-8")
                var Doi_tuong = JSON.parse(Chuoi)
                Danh_sach.push(Doi_tuong)
            }

        })

        return Danh_sach
    }
    Doc_Thong_tin_Nhat_ky() {
        return Doc_Thong_tin_Nhat_ky()
    }

    Ghi_moi_Nhat_ky(Ngay, Doi_tuong) {
        var Kq = ""
        try {
            var Duong_dan = Thu_muc_Du_lieu + "//" + Ngay + "." + Cong_nghe
            var Chuoi = JSON.stringify(Doi_tuong, null, "\t")
            File.writeFileSync(Duong_dan, Chuoi, "UTF-8")
        } catch (Loi) {
            Kq = Loi
        }

        return Kq
    }
}



//Public để các file js khác gọi 
var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly