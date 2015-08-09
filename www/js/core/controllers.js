(function(){
    'use strict';

    angular
        .module('starter.controllers', [])
        .controller('Main', function($scope, $ionicModal, $timeout) {

            /*** MOCK ***/

            $scope.model = {
                personalData : {
                    name : 'Pepe Guay',
                    address : 'Calle Mayor 5, 2A',
                    phone : '+34 656 78 79 70',
                    email : 'test@gmail.com',
                    genre : 'male',
                    avatar: 'http://www.thepoliticalscientist.org/wp-content/uploads/2014/04/avatar_male_gray_on_light_200x200_1.png'
                },

                overview : {
                    name: 'Pepe',
                    photo: '',
                    tasks : [
                        'Change phone line',
                        'Paint bath wall'
                    ],
                    nextPayment: {
                        date: '22/09/2015',
                        amount: '425.45€',
                        type: 'Bank transfer'
                    },
                    progress: '76'
                },

                tasks : {
                    toDo : [
                        'New windows in kitchen',
                        'Fix garden door'
                    ],
                    doing : [
                        'Test TV',
                        'Replace mirror'
                    ],
                    done : [
                        'Change phone line',
                        'Paint bath wall'
                    ]
                },

                documents : [
                    {
                        name : 'Contract (PDF)',
                        url : ''
                    },
                    {
                        name : 'Last invoice (PDF)',
                        url : ''
                    },
                    {
                        name : 'Insurance receipt (PDF)',
                        url : ''
                    },
                    {
                        name : 'Appliances List (XLS)',
                        url : ''
                    }
                ],

                photos : [
                    {
                        before : '',
                        after : ''
                    },
                    {
                        before : '',
                        after : ''
                    }
                ],
            }

            $scope.$on('$ionicView.afterEnter', function(){
                setTimeout(function(){
                    document.getElementById("splash").style.display = "none";      
                }, 3000);
            });


          // Form data for the login modal
          $scope.loginData = {};

          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('js/login/login.html', {
            scope: $scope
          }).then(function(modal) {
            $scope.modal = modal;
          });

          // Triggered in the login modal to close it
          $scope.closeLogin = function() {
            $scope.modal.hide();
          };

          // Open the login modal
          $scope.login = function() {
            $scope.modal.show();
          };

          // Perform the login action when the user submits the login form
          $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
              $scope.closeLogin();
            }, 1000);
          };
      });
})()
