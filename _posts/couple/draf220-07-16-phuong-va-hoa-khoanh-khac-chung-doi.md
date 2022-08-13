---
layout: post
author: Le Dinh Cuong
title: Phương & Hoa | Khoảnh Khắc Chung Đôi
description: Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction. I believe that imagination is stronger than knowledge – myth is more potent than history – dreams are more powerful than facts – hope always triumphs over experience – laughter is the cure for grief – love is stronger than death.
thumbnail: images/PH/Thumb/1.jpg
categories: [couple]
tags: [couple, summer]
time: Jun, 2020
location: Saint Petersburg
photographer: Le Dinh Cuong
---


  <section class="py-15">
    <div class="container">
      <div class="row g-3 g-xl-5 gallery-1">
        {% for image in site.data.couple.20200716phuonghoa.images %}
            <div class="col-{{ image.col }}">
            <figure class="media media-image {{ image.equal }}" 
                data-bp='{"imgSrc": "./images/PH/{{ image.name }}.jpg" , "parentGalleryClass": "gallery-1" }' >
                <span  style="background-image: url('images/PH/Thumb/{{ image.name }}.jpg')">
                </span>
            </figure>
            </div>
        {% endfor %}


        <div class="col-12">
          <figure class="media media-image equal-2-1" 
            data-bp='{"imgSrc": "./assets/images/small-1.jpg" , "parentGalleryClass": "gallery-1" }' >
            <span  style="background-image: url('assets/images/small-1.jpg')">
            </span>
          </figure>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 bg-light">
            <div class="card-wrap p-xl-5">
              <div class="card-header pb-0">
                <span class="display-1">"</span>
              </div>
              <div class="card-footer pt-0 mt-auto">
                <h3 class="card-title fs-4 text-secondary"><span class="text-black">Build better websites.</span> A
                  new
                  template
                  inspired by the world’s best design
                  practices.</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <figure class="media media-image equal-2-1 equal-lg-1-1" 
            data-bp='{"imgSrc": "./assets/images/small-2.jpg" , "parentGalleryClass": "gallery-1" }' >
            <span  style="background-image: url('assets/images/small-2.jpg')">
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
                <h2>Focus on what matters.</h2>
              </div>
            </div>
            <div class="background background-overlay">
              <video id="player" playsinline autoplay muted loop>
                <source src="assets/video/video-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card bg-light">
            <div class="card-body p-8">
              <div class="row g-6">
                <div class="col">
                  <span class="d-block display-3 fw-bold">84</span>
                  <span class="lead text-secondary">working hours</span>
                </div>
                <div class="col">
                  <span class="d-block display-3 fw-bold">45</span>
                  <span class="lead text-secondary">working hours</span>
                </div>
                <div class="col">
                  <span class="d-block display-3 fw-bold">154</span>
                  <span class="lead text-secondary">working hours</span>
                </div>
                <div class="col">
                  <span class="d-block display-3 fw-bold">154</span>
                  <span class="lead text-secondary">working hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <figure class="media media-image equal-1-1" 
            data-bp='{"imgSrc": "./assets/images/small-6.jpg" , "parentGalleryClass": "gallery-1" }' >
            <span  style="background-image: url('assets/images/small-6.jpg')">
            </span>
          </figure>
        </div>
        <div class="col-lg-6">
          <figure class="media media-image equal-1-1" 
            data-bp='{"imgSrc": "./assets/images/small-4.jpg" , "parentGalleryClass": "gallery-1" }' >
            <span  style="background-image: url('assets/images/small-4.jpg')">
            </span>
          </figure>
        </div>
      </div>
    </div>
  </section>
 