function addPlant() {
    var plant = {};
    
    plant.name = document.querySelector("#inputName").value;
    plant.location = document.querySelector("#inputLocation").value;
    plant.period = document.querySelector("#inputPeriod").value;
    plant.last = document.querySelector("#inputLastWatering").value;
    
    greenery.addPlant(new Plant(plant)); 
    refreshTable();
}

function refreshTable() {
    var newTable = document.createElement('tbody');
    var table = document.getElementById('statusTable');
    
    function removePlant(){
        var plantName = this.parentElement.parentElement.firstChild.innerHTML;
        greenery.removePlant(plantName);
        refreshTable();
    }
    
    function waterPlant(){
        var plantName = this.parentElement.parentElement.firstChild.innerHTML;
        greenery.waterPlant(plantName);
        refreshTable();
    }
    
    for (var i = 0; i < greenery.plants.length; i++) {
        var row = document.createElement("tr");
        var plant = greenery.plants[i];
        
        var name = document.createElement('td');
        name.innerHTML = plant.name;
        row.appendChild(name);
        
        var location = document.createElement('td');
        location.innerHTML = plant.location;
        row.appendChild(location);
        
        var status = document.createElement('td');
        status.innerHTML = plant.getStatus();
        row.appendChild(status);
        
        var watering = document.createElement('td');
        var btn = document.createElement('button');
        btn.innerHTML = "Water";
        btn.onclick = waterPlant;
        watering.appendChild(btn);
        row.appendChild(watering);
        
        
        var dlt = document.createElement('td');
        var btn = document.createElement('button');
        btn.innerHTML = "Delete";
        btn.onclick = removePlant;
        dlt.appendChild(btn);
        row.appendChild(dlt);
        
        newTable.appendChild(row);
    }
    table.replaceChild(newTable, document.getElementsByTagName('tbody')[0])
}


