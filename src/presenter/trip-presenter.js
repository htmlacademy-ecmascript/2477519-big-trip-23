import RoutePointView from '../view/route-point.js';
import FiltersView from '../view/filters.js';
import SortingView from '../view/sort.js';
import EditingFormView from '../view/edit-form.js';
import { RenderPosition, render } from '../render.js';
import { EVENT_POINTS_AMOUNT } from '../const.js';

export default class MainPresenter {
  constructor() {
    this.tripInfoElement = document.querySelector('.trip-main');
    this.filtersElement = document.querySelector('.trip-controls__filters');
    this.tripEventsElement = document.querySelector('.trip-events');

    this.eventsListElement = document.createElement('ul');
    this.eventsListElement.classList.add('trip-events__list');
    this.tripEventsElement.append(this.eventsListElement);
  }

  init() {
    const routePointView = new RoutePointView();

    // Отрисовка информации о поездке
    render(routePointView.getTripInfoElement(), this.tripInfoElement, RenderPosition.AFTERBEGIN);

    // Отрисовка фильтров
    render(new FiltersView(), this.filtersElement);

    // Отрисовка сортировки
    render(new SortingView(), this.tripEventsElement, RenderPosition.AFTERBEGIN);

    // Отрисовка формы редактирования
    render(new EditingFormView(), this.eventsListElement);

    // Отрисовка точек маршрута
    for (let i = 0; i < EVENT_POINTS_AMOUNT; i++) {
      render(routePointView.getTripEventsPointElement(), this.eventsListElement);
    }
  }
}
