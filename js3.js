const URL="https://catfact.ninja/fact";
//let promise=fetch(URL);
//console.log(promise);
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
// const getFacts=async()=>{
//     let response=await fetch(URL);
//     console.log(response.status,response.url);
//     let result=await response.json();
//     factPara.innerText="Final Result ::    "+result.fact+"\n\nHaving length::"+result.length;
// };
function getFacts()
{
 fetch(URL).then((response)=>
{
    return response.json();
}).then((data)=>
{
    console.log(data);
    factPara.innerText="Final Result ::    "+data.fact+"\n\nHaving length::"+data.length;

});
}
btn.addEventListener("click",getFacts);