import * as angular from 'angular';
import GreeneryController from './controllers/GreeneryController';
import AddPlantComponent from './components/addPlant/AddPlant';
import PlantListComponent from './components/plantList/PlantList';
import dataProvider from './services/greeneryDataProvider'


var app = angular.module('greenery', []);
app.factory("dataProvider", ['$http', dataProvider]);


app.controller('GreeneryController', GreeneryController);
app.component('addPlant', AddPlantComponent);
app.component('plantList', PlantListComponent);


app.run(['$http','$rootScope','dataProvider', function($http, $rootScope, dataProvider) {
    $rootScope.dataProvider = dataProvider;
    $rootScope.dataProvider.getPlants();
}])