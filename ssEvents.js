
'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const ServerEvent = bizSdk.ServerEvent;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;
const Content = bizSdk.Content;

const access_token = 'EAAHh1iTdqYIBAI4SMWWSZCj3ZBLQZCZBv1VYM5Akc45sYmEgTt4hOGzkSuWIlulZCm1zPAKfr0f7ri9JFE6yKj17ePfP55WV4gZB56662542IbvXoDa2KstARkhZBZAFVD6f0GyJN6soGlkPIHuZCUH2UZBPZA5mLSzUR7Nz8QOGE2hcIZBhN9UvEPc7WndZCZBA0F7cU92vOgOhfblgZDZD';
const pixel_id = '983136942045901';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData = (new UserData())
                .setEmail('samuel@eg.com')
                .setFbp('fb.1.1558571054389.1098115397')
                .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');

const customData = (new CustomData())
                .setCurrency('usd')
                .setValue(400.45);

const serverEvent = (new ServerEvent())
                .setEventName('ViewContent')
                .setEventTime(current_timestamp)
                .setUserData(userData)
                .setCustomData(customData);

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
                .setEvents(eventsData);


eventRequest.execute();
