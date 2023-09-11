<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const modal = ref()

const showModal = () => {
  modal.value.isModalVisible = true
}

</script>

<template>
  <main>
    <div class="header">
        <div class="header_left">
            <a href="#" class="header_burger"><svg class="icon24"><use xlink:href="./img/sprite.svg#burger"></use></svg></a>
            <div class="header_logo active">
                <a class="logo" href="#">T<span>op</span> C<span>lient</span></a>
                <div class="side_toggle">
                    <a href="#">
                        <svg class="icon24">
                            <use xlink:href="./img/sprite.svg#side_toggle"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="header_cent">
                <a href="#">Справочный Центр<span>Помощь</span></a>
            </div>
            <div class="header_tech">
                <a href="tel:88006008013">8 (800) 600 80 13</a>
                <a href="mailto:hd@clubwings.ru">hd@clubwings.ru</a>
            </div>
        </div>
        <div class="header_right">
            <div class="header_ico">
                <div class="header_currency">
                    <a href="#"><svg class="icon24 icon_rus icon_bord"> <use xlink:href="./img/sprite.svg#ico_rub"></use></svg>RU</a>
                    <a href="#"><svg class="icon24 icon_fill"> <use xlink:href="./img/sprite.svg#ico_usd"></use></svg>USD</a>
                </div>
                <div class="header_user_mess">
                    <a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#user_mess"></use></svg></a>
                </div>
            </div>
            <div class="header_user">
                <a href="#"><span>Ольга Кузьма</span> <img alt="profile_img" src="img/profile_img.png" width="40" height="40"></a>
            </div>
        </div>
    </div>
    <div class="work_area">
        <div class="sidebar active">
            <div class="group_block">
                <div class="side_logo">
                    <a href="#"><img alt="side_logo" src="img/side_logo.svg" width="50" height="50"></a>
                    <div class="side_plane">
                        <div class="plane_name">Travel plane</div>
                        <div class="plane_price">540 000 ₽</div>
                    </div>
                </div>
            </div>
            <div class="group_block">
                <ul class="side_nav">
                    <li class="active"><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_home" /></svg>Главная</a></li>
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_service" /></svg>Услуги</a></li>
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_order" /></svg>Заказы</a></li>
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_stat" /></svg>Статистика</a></li>
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_company" /></svg>Компании</a></li>
                </ul>
            </div>
            <div class="group_block">
                <ul class="side_nav">
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_news" /></svg>Новости</a></li>
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_options" /></svg>Настройки</a></li>
                </ul>
            </div>
            <div class="group_block">
                <ul class="side_nav">
                    <li><a href="#"><svg class="icon24"> <use xlink:href="./img/sprite.svg#ico_exit" /></svg>Выйти</a></li>
                </ul>
            </div>
        </div>
        <div class="wrapper">
            <button @click="showModal">Показать условия тарифа</button>
            <div style="height: 900px;"></div>
            <Modal ref="modal" />

        </div>
    </div>
  </main>
</template>
