---
layout: post
author: Le Dinh Cuong
title: Anton & Quynh | Together
description: What is love? Those who don't like it call it responsibility. Those who play with it call it a game. Those who don't have it call it a dream. Those who understand it call it destiny. And me, I call it you.
thumbnail: images/AQ/Thumbnail/1.jpg
categories: [couple]
tags: [couple, summer]
time: Jul, 2022
location: VDNKh
photographer: Dinh Cuong
planer: Minh Hang
download: "https://ledinhcuong-my.sharepoint.com/:u:/p/mail/EdLTP6qx_e1BnWnb_S96_SABpUu0fZ2E3mOoxCGtlohiNg?e=FnbFxb"
---


  <section class="py-15">
    <div class="container">
      <div class="row g-3 g-xl-5 gallery-1">
        {% for image in site.data.couple.20220801antonquynh.images %}
            <div class="col-{{ image.col }}">
            <figure class="media media-image {{ image.equal }}" 
                data-bp='{"imgSrc": "./images/AQ/HD/{{ image.name }}.jpg" , "parentGalleryClass": "gallery-1" }' >
                <span  style="background-image: url('images/AQ/Thumbnail/{{ image.name }}.jpg')">
                </span>
            </figure>
            </div>
        {% endfor %}

        <div class="col-lg-6">
          <div class="card h-100 bg-light">
            <div class="card-wrap p-xl-5">
              <div class="card-header pb-0">
                <span class="display-1">"</span>
              </div>
              <div class="card-footer pt-0 mt-auto">
                <h3 class="card-title fs-3 text-secondary font-great"><span class="text-black">Good relationships</span>
                   don't just happen. They take time, patience, and two people getting through all the hard times together.</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <figure class="media media-image equal-2-1 equal-lg-1-1" 
            data-bp='{"imgSrc": "./images/AQ/HQ/9.jpg" , "parentGalleryClass": "gallery-1" }' >
            <span  style="background-image: url('images/AQ/Thumbnail/9.jpg')">
            </span>
          </figure>
        </div>

        <div class="col-12 position-relative">
          <div class="card equal-md-2-1 inverted">
            <div class="card-wrap p-xl-5">
              <div class="card-header">
                <div class="icon-box icon-box-lg bg-opaque-white rounded-circle">
                  <i class="bi bi-check text-white"></i>
                </div>
              </div>
              <div class="card-footer mt-auto">
                <h2>Love is <span data-typed='{"strings": ["you.", "me.", "us."]}'></span></h2>
              </div>
            </div>
            <div class="background background-overlay">
              <video id="player" playsinline autoplay muted loop>
                <source src="assets/video/video-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {% for image in site.data.couple.20220801antonquynh.images-2 %}
            <div class="col-{{ image.col }}">
            <figure class="media media-image {{ image.equal }}" 
                data-bp='{"imgSrc": "./images/AQ/HD/{{ image.name }}.jpg" , "parentGalleryClass": "gallery-1" }' >
                <span  style="background-image: url('images/AQ/Thumbnail/{{ image.name }}.jpg')">
                </span>
            </figure>
            </div>
        {% endfor %}

      </div>
    </div>
    <div class="d-flex flex-column pt-15 container">
      <a href="{{page.download}}" target="_blank" type="button" class="btn btn-red rounded-pill text-white">DOWNLOAD</a>
    </div>
  </section>
 