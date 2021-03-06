const angular = require('angular')
const router = require('angular-ui-router')
const material = require('angular-material')
const animate = require('angular-animate')
const aria = require('angular-aria')
const messages = require('angular-messages')
require('angular-file-upload/dist/angular-file-upload')
require("setimmediate")

// Import main SASS
require('../scss/main.scss')

// Creating angular app
const app = angular.module('app',
    [router, material, animate, aria, messages,'angularFileUpload'])

// Registering controllers
require('./feed/FeedController')(app)
require('./post/PostController')(app)
require('./product/ProductController')(app)
require('./sidebar/SidebarController')(app)
require('./toolbar/ToolbarController')(app)
require('./banner/BannerController')(app)

// Configure routes
app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $urlRouterProvider.otherwise('/')

        $stateProvider.state('feed', {
            url:'/',
            template: require('./feed/feed.html'),
            controller: 'FeedController'
        }).state('post', {
            url:'/post',
            template: require('./post/post.html'),
            controller: 'PostController'
        }).state('product', {
            url:'/product/:id',
            template: require('./product/product.html'),
            controller: 'ProductController'
        })
    }])


