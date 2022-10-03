import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import AddPaymentForm from "../components/AddPaymentsForm.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Test AddPaymentForm", () => {
  let actions;
  let getters;
  let mutations;
  let store;
  beforeEach(() => {
    actions = {
      fetchCategoryList: jest.fn(),
    };
    mutations = { ADD_PAYMENT_LIST: jest.fn() };
    getters = {
      categoryList: jest.fn(),
    };
    store = new Vuex.Store({ mutations, actions, getters });
  });
  test('test mutation "ADD_PAYMENT_LIST" ', () => {
    const wrapper = shallowMount(AddPaymentForm, { store, localVue });
    const inputDate = wrapper.find('input[name="date"]');
    const btnSave = wrapper.find('button[name="save"]');
    inputDate.setValue("03.10.2022");
    btnSave.trigger("click");

    expect(mutations.ADD_PAYMENT_LIST).toBeCalled();
  });
});
