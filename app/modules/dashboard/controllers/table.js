
dashboard.controller("TableController", ['$rootScope', '$filter', '$scope',
function ($rootScope,$filter, $scope){
    var vm = this;

    $scope.peopleTableData = [
            {
                id: 1,
                Name: 'Mark',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                Name: 'Jacob',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                Name: 'Larry',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                Name: 'John',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
            {
                id: 5,
                Name: 'Jack',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30'
            },
            {
                id: 6,
                Name: 'Ann',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21'
            },
            {
                id: 7,
                Name: 'Barbara',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43'
            },
            {
                id: 8,
                Name: 'Sevan',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13'
            },
            {
                id: 9,
                Name: 'Ruben',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22'
            },
            {
                id: 10,
                Name: 'Karen',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33'
            },
            {
                id: 11,
                Name: 'Mark',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38'
            },
            {
                id: 12,
                Name: 'Jacob',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48'
            },
            {
                id: 13,
                Name: 'Haik',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48'
            },
            {
                id: 14,
                Name: 'Garegin',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40'
            },
            {
                id: 15,
                Name: 'Krikor',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32'
            },
            {
                "id": 16,
                "Name": "Francisca",
                "username": "@Gibson",
                "email": "franciscagibson@comtours.com",
                "age": 11
            },
            {
                "id": 17,
                "Name": "Tillman",
                "username": "@Snow",
                "email": "tillmansnow@comtours.com",
                "age": 34
            },
            {
                "id": 18,
                "Name": "Jimenez",
                "username": "@Bryant",
                "email": "jimenezbryant@comtours.com",
                "age": 45
            },
            {
                "id": 19,
                "Name": "Sandoval",
                "username": "@Mcbride",
                "email": "sandovalmcbride@comtours.com",
                "age": 32
            },
            {
                "id": 20,
                "Name": "Griffin",
                "username": "@Charles",
                "email": "griffincharles@comtours.com",
                "age": 19
            },
            {
                "id": 21,
                "Name": "Cora",
                "username": "@Caldwell",
                "email": "coracaldwell@comtours.com",
                "age": 27
            },
            {
                "id": 22,
                "Name": "Cindy",
                "username": "@Velez",
                "email": "cindyvelez@comtours.com",
                "age": 24
            },
            {
                "id": 23,
                "Name": "Frieda",
                "username": "@Craig",
                "email": "friedacraig@comtours.com",
                "age": 45
            },
            {
                "id": 24,
                "Name": "Cote",
                "username": "@Rowe",
                "email": "coterowe@comtours.com",
                "age": 20
            },
            {
                "id": 25,
                "Name": "Trujillo",
                "username": "@Valenzuela",
                "email": "trujillovalenzuela@comtours.com",
                "age": 16
            },
            {
                "id": 26,
                "Name": "Pruitt",
                "username": "@Sloan",
                "email": "pruittsloan@comtours.com",
                "age": 44
            },
            {
                "id": 27,
                "Name": "Sutton",
                "username": "@Black",
                "email": "suttonblack@comtours.com",
                "age": 42
            },
            {
                "id": 28,
                "Name": "Marion",
                "username": "@Espinoza",
                "email": "marionespinoza@comtours.com",
                "age": 47
            },
            {
                "id": 29,
                "Name": "Newman",
                "username": "@Keith",
                "email": "newmankeith@comtours.com",
                "age": 15
            },
            {
                "id": 30,
                "Name": "Boyle",
                "username": "@Summers",
                "email": "boylesummers@comtours.com",
                "age": 32
            },
            {
                "id": 31,
                "Name": "Haynes",
                "username": "@Mckenzie",
                "email": "haynesmckenzie@comtours.com",
                "age": 15
            },
            {
                "id": 32,
                "Name": "Miller",
                "username": "@Young",
                "email": "milleryoung@comtours.com",
                "age": 55
            },
            {
                "id": 33,
                "Name": "Johnston",
                "username": "@Knight",
                "email": "johnstonknight@comtours.com",
                "age": 29
            },
            {
                "id": 34,
                "Name": "Lena",
                "username": "@Forbes",
                "email": "lenaforbes@comtours.com",
                "age": 25
            }
    ];

    $scope.TableCollection = [];
    console.log("coming to table controller");

}]);

