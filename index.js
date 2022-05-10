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
    
console.log(score)

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