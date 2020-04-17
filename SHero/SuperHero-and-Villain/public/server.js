function getName() {
    var SName=document.getElementById("usr").value;
    
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://www.superheroapi.com/api.php/2947961985298453/search/"+SName,true);

    xhr.onload=function(req,res){   
        var response=JSON.parse(xhr.responseText);
           var Sid = response.results[0].id;
            
            var xhrr=new XMLHttpRequest();
            xhrr.open("GET","https://www.superheroapi.com/api.php/2947961985298453/"+Sid,true);

            xhrr.onload=function(req,res){
                var response=JSON.parse(xhrr.responseText);
                console.log(response);
                var boss=document.getElementById("main");

                //Setting an image
                var mains=document.getElementById("simg");
                mains.innerHTML=" ";
                var image_url=document.createElement('img');
                image_url.className += "mystyle";
                image_url.src=response.image.url;
                mains.appendChild(image_url);
                boss.appendChild(mains);
                
                //first row
                var table= document.getElementById("tid");
                table.innerHTML=" ";
                var heading=document.createElement("tr");
                var head1=document.createElement("th");
                head1.className += "top";
                var head2=document.createElement("th");
                head2.className += "top";
                var head3=document.createElement("th");
                head3.className += "top";
                
                head1.innerHTML = "POWERSTATS";
                head2.innerHTML = "BIOGRAPHY";
                head3.innerHTML = "APPEARANCE";

                heading.appendChild(head1);
                heading.appendChild(head2);
                heading.appendChild(head3);
                table.appendChild(heading);

                //second row
                var row2= document.createElement("tr");
                var d1=document.createElement("td");
                d1.className += "data";
                var d2=document.createElement("td");
                d2.className += "data";
                var d3=document.createElement("td");
                d3.className += "data";

                d1.innerHTML = "Intelligence : "+response.powerstats.intelligence;
                d2.innerHTML = "Full- Name : "+response.biography['full-name'];
                d3.innerHTML = "Gender : "+response.appearance.gender;

                row2.appendChild(d1);
                row2.appendChild(d2);
                row2.appendChild(d3);
                table.appendChild(row2);

               //third row
               var row3=document.createElement("tr");
               var da1=document.createElement("td");
               da1.className += "data";
                var da2=document.createElement("td");
                da2.className += "data";
                var da3=document.createElement("td");
                da3.className += "data";

                da1.innerHTML = "Strength : "+response.powerstats.strength;
                da2.innerHTML = "First Appearance : "+response.biography['first-appearance'];
                da3.innerHTML = "Race : "+response.appearance.race;

                row3.appendChild(da1);
                row3.appendChild(da2);
                row3.appendChild(da3);
                table.appendChild(row3);

                //fourth row
                var row4=document.createElement("tr");
               var dat1=document.createElement("td");
               dat1.className += "data";
                var dat2=document.createElement("td");
                dat2.className += "data";
                var dat3=document.createElement("td");
                dat3.className += "data";

                dat1.innerHTML = "Speed : "+response.powerstats.speed;
                dat2.innerHTML = "Place Of Birth : "+response.biography['place-of-birth'];
                dat3.innerHTML = "Eye Colour : "+response.appearance['eye-color'];

                row4.appendChild(dat1);
                row4.appendChild(dat2);
                row4.appendChild(dat3);
                table.appendChild(row4);

                 //fifth row
                 var row5=document.createElement("tr");
               var data1=document.createElement("td");
               data1.className += "data";
                var data2=document.createElement("td");
                data2.className += "data";
                var data3=document.createElement("td");
                data3.className += "data";

                data1.innerHTML = "Power : "+response.powerstats.power;
                data2.innerHTML = "Publisher : "+response.biography.publisher;
                data3.innerHTML = "Hair Colour : "+response.appearance['hair-color'];

                row5.appendChild(data1);
                row5.appendChild(data2);
                row5.appendChild(data3);
                table.appendChild(row5);

                boss.appendChild(table);

            };
            xhrr.send();
    };
    xhr.send();
}