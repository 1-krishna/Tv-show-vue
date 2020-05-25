import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import CarouselItem from '../../../src/components/CarouselItem.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Carousel Item Component', () => {
    let carouselItemWrapper;
    const router = new VueRouter(routes);
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        carouselItemWrapper = shallowMount(CarouselItem, {
            Vue,
            router,
            propsData: {
                imageSrc: "http://static.tvmaze.com/uploads/images/medium_portrait/30/75440.jpg",
                id: 1,
                shoName: "Something"
            }
        })
    });

    afterEach(() => {
        carouselItemWrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(carouselItemWrapper.isVueInstance).toBeTruthy();
    })

    it('expected image stub', () => {
        const expected = '<v-img-stub';
        expect(carouselItemWrapper.html()).toContain(expected);
    })

    it("it should navigate to details", () => {
        carouselItemWrapper.vm.details(123);
        expect(carouselItemWrapper.vm.$route.path).toBe("/details/123");
    });

})