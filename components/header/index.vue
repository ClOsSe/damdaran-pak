<template>
    <div>
        <div class="navbar-area fixed-top">
            <!-- Menu For Mobile Device -->
            <div class="mobile-nav">
                <a href="index.html" class="logo">
                    <img src="@/assets/img/logo.png" alt="Logo">
                </a>
            </div>

            <!-- Menu For Desktop Device -->
            <div class="main-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="@/assets/img/logo.png" alt="Logo">
                        </a>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NuxtLink to="/" class="nav-link dropdown-toggle active">خانه </NuxtLink>
                                   
                                </li>
                                <li class="nav-item">
                                    <NuxtLink  to="/registerOrder" class="nav-link dropdown-toggle ">ثبت سفارش </NuxtLink>
                                   
                                </li>
                                
                                <li class="nav-item">
                                    <NuxtLink  to="/aboutUS" class="nav-link">درباره ما</NuxtLink>
                                </li>
                                
                               
                                <li class="nav-item">
                                    <NuxtLink  to="/blog" class="nav-link dropdown-toggle">وبلاگ </NuxtLink>
                                   
                                </li>
                                <li class="nav-item">
                                    <NuxtLink  to="/contact" class="nav-link">تماس با ما</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink  to="/faq" class="nav-link">سوالات متداول</NuxtLink>
                                </li>
                            </ul>
                            <div class="side-nav">
                                <div class="cta-call">
                                    <i class='bx bxl-instagram'></i>
                                    <i class='bx bxl-whatsapp'></i>
                                </div>
                               
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>    
</template>