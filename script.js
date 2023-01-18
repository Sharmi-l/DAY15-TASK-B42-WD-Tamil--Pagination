const tableBodyData=(element,content=" ")=>{
   let td=document.createElement(element);
   td.innerHTML= content;
   return td;
}
 let pagination = document.getElementById("pagination");
 let  tableList =document.getElementsByClassName("table");

 let currentPage=1;
 let lastPage=10;

 var paginationData =async(limitPerPage,page)=>{
   var data = await fetch('db.json');
   var dataDetails = await data.json();
   console.log(dataDetails);

   page--;
 let start =limitPerPage*page
 let end=start+limitPerPage

 let items=dataDetails.slice(start,end);
 console.log(items);

 var table=document.getElementsByClassName("table")
 console.log(table);
 var tbody=document.createElement("tbody");
 for(var i=0;i<items.length;i++){
   var tr=tableBodyData("tr");
   var td1=tableBodyData("td",items[i].id);
   var td2=tableBodyData("td",items[i].name);
   var td3=tableBodyData("td",items[i].email);

   tbody.append(tr);
   tr.append(td1,td2,td3)
   table[0].append(tbody)
 }
 function setPagination(item,wrap,limitPerPage){
   wrap.innerHTML="";

   let count=Math.ceil(item.length/limitPerPage)
   for(i=1;i<=count;i++){
      let button=pagiBtn(i)
      wrap.append(button)
      console.log(button)
   }
 }
 setPagination(dataDetails,pagination,limitPerPage)

 function pagiBtn(page){
   let btn = document.createElement("a")
   btn.setAttribute("class","page-link")
   btn.innerHTML=page;

   btn.addEventListener("click",function(e){
      e.preventDefault();
      tbody.removeChild(tr)
      tr.removeChild(td1,td2,td3)
      table[0].removeChild(tbody)
      currentPage=page
      console.log(currentPage)
      console.log(lastPage)

      paginationData(lastPage,currentPage)
   })
   return btn;
 }
 }
 paginationData(lastPage,currentPage);

