fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then(data => data.text()).then(response =>{
    const data = JSON.parse(response);
    console.log(data);
    const users = data.data;
    var generatedHtml = "";

    for(i=0;i<users.length;i++){
        generatedHtml += "<tr><td>"+users[i].name +"</td><td>"+users[i].office +"</td><td>"+users[i].position +"</td><td>₹"+users[i].salary +"</td></tr>";
    }

    const tableContent = document.getElementById("employeeContent");
    tableContent.innerHTML = generatedHtml;
})