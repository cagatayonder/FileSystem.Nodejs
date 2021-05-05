const fs = require('fs');
// EMPLOYEES.JSON DOSYASI OLUŞTURULDU

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Dosya Eklendi')
    }
});

// EMPLOYEES.JSON DOSYASI OKUNDU
fs.readFile('employees.json','utf8',(err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
        console.log('Dosya Okundu')
    }
});

// VERİ GÜNCELLENDİ
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Yeni Veri Eklendi')
        console.log('Veriler Güncellendi')
    }
});

// EMPLOYEES:JSON DOSYASI SİLİNDİ
fs.unlink('employees.json',(err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Dosya Silindi')
    }
});
