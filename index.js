//Buoc 1:DOM toi cac input, select


function result() {
    var khuvuc = document.getElementById('khuvuc').value
    var doituong = document.getElementById('doituong').value
    var diem1 = +document.getElementById('diem1').value
    var diem2 = +document.getElementById('diem2').value
    var diem3 = +document.getElementById('diem3').value
    var diemChuan =+document.getElementById('diemchuan').value

    var areaPoint = +diemKhuvuc(khuvuc)
    var subjectPoint = +diemDoituong(doituong)
    var examScore = +diemMonthi(diem1, diem2, diem3)
    var score = areaPoint + subjectPoint + examScore
    


    hienthi(diem1,diem2,diem3,score,diemChuan)
}

//Ham hien thi ra ket qua
function hienthi(diem1,diem2,diem3,score,diemChuan) {
    if(diemChuan>score){
        document.getElementById('ketqua').style.display = 'block'
        document.getElementById('xuat').innerHTML ='Rớt'
    }
    else {
        document.getElementById('ketqua').style.display = 'block'
        document.getElementById('xuat').innerHTML ='Đậu'
    }
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        document.getElementById('ketqua').style.display = 'block'
        document.getElementById('xuat').innerHTML = 'Rớt, vì có môn 0 điểm'
    }
    

}


// Ham tinnh diem khu vuc

function diemKhuvuc(khuvuc) {
    switch (khuvuc) {
        case 'a':
            return 2
        case 'b':
            return 1
        case 'c':
            return 0.5
        default:
            return 0
    }
}

//Ham tinh diem doi tuong

function diemDoituong(doituong) {
    switch (doituong) {
        case '1':
            return 2.5
        case '2':
            return 1.5
        case '3':
            return 1
        default:
            return 0
    }
}

//Ham tinh diem mon thi
function diemMonthi(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3
}

///BAi TAP 2

function tienDien(){
    var fullName = document.getElementById('name').value
    var kw = document.getElementById('kw').value

    var money = 0
    if(kw <= 50){
        money += 500  
    }else if(kw <100){
        money += 500 + (kw - 50)*650 
    }else if(kw < 200){
        money += 500 + 50*650 + (kw - 100)*850
    }else if(kw<350){
        money += 500 + 50*650 + 100*850 +(kw-200)*1100
    }else{
        money += 500 + 50*650 + 100*850 + 150*1100 + (kw-350)*1300
    }

    document.getElementById('result').style.display = 'block'
    document.getElementById('inHoten').innerHTML = fullName+' ;'
    document.getElementById('inTien').innerHTML = money.toLocaleString()


}

//Ham tinh tien dien
// function tinhTiendien(kw,kw_50,kw_50_100,kw_100_200,kw_200_350,kw_con,){
//     var money =0
//     if(kw <= 50){
//         money += kw_50  
//     }else if(kw <100){
//         money += kw_50 + (kw - 50)*kw_50_100 
//     }else if(kw < 200){
//         money += kw_50 + 50*kw_50_100 + (kw - 100)*kw_100_200
//     }else if(kw<350){
//         money += kw_50 + 50*kw_50_100 + 100*kw_100_200 +(kw-200)*kw_200_350
//     }else{
//         money += kw_50 + 50*kw_50_100 + 100*kw_100_200 + 150*kw_200_350 + (kw-350)*kw_con
//     }
// }



function tinhTienthue(){
    var hoTen = document.getElementById('inName').value
    var thuNhap =+document.getElementById('thunhap').value
    var soNguoi =+document.getElementById('soNguoi').value

    var tienthunhap = tinhthunhap(thuNhap,soNguoi)
    var thue = 0
    if(tienthunhap <= 60e+6){
        thue += tienthunhap*0.05
    }else if(tienthunhap<=120e+6){
        thue += 60e+6*0.05 + (tienthunhap - 60e+6)*0.1
    }else if(tienthunhap<=210e+6){
        thue +=60e+6*0.05 + 60*0.1+(tienthunhap-120e+6)*0.15
    }else if(tienthunhap<=384e+6){
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+(tienthunhap-210e+6)*0.2
    }else if(tienthunhap<=624e+6){
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+174e+6*0.2+(tienthunhap-384e+6)*0.25
    }else if(tienthunhap<=960e+6){
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+174e+6*0.2+240e+6*0.25+(tienthunhap-624e+6)*0.3
    }else{
        thue +=60e+6*0.05 + 60*0.1+90e+6*0.15+174e+6*0.2+240e+6*0.25+336e+6*0.3+(tienthunhap-960e+6)*0.35
    }
    
    document.getElementById('ketquatienthue').style.display = 'block'
    document.getElementById('outName').innerHTML = hoTen +';'
    document.getElementById('outMoney').innerHTML = thue.toLocaleString()
    
}

//Ham tinh thu nhap chiu thue

function tinhthunhap(thuNhap,soNguoi){
    return thuNhap - 4e+6 - (soNguoi*1600000)
}

//Bai tap 4


function tinhtiencap(){
    var loaiKh = document.getElementById('loaikh').value
    var maKh =document.getElementById('makh').value
    var soKenh =+document.getElementById('sokenh').value
    var soKn =+document.getElementById('sokn').value
    var price = 0
    if(loaiKh==1){
        price = tiencap(4.5,20.5,7.5,soKenh,soKn,)
    }else if(loaiKh==2){
       price = tiencap(15,75,50,soKenh,soKn,)
    }

    document.getElementById('hienketqua').style.display = 'block'
    document.getElementById('inmakh').innerHTML = maKh +';'
    document.getElementById('intiencap').innerHTML ='$'+ price
}

//Ham onchange
function hiensoKn(){
    var loai =+document.getElementById('loaikh').value
    console.log(loai)
    if(loai === 1 || loai===0){
        document.getElementById('hienso').style.display='none'
    }else{
        document.getElementById('hienso').style.display='block'
    }   
}
//Ham tinh tien cap
function tiencap(hoadon,phidv,tienthuekenh,soKenh,soKn,){
    var price = 0
    if(soKn<=10){
        price = hoadon+phidv+(tienthuekenh*soKenh)
    }else{
        price = hoadon+phidv+(tienthuekenh*soKenh)+(soKn-10)*5
    }
    return price
}
