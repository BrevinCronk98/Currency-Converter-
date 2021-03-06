import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Currency } from './money-api-fetch';


$(document).ready(function() {
  $('#number-form').submit(function(event) {
    event.preventDefault();
    $('#btn-row').show();
    $('#conv-disp').hide();

    let num = $('#num-input').val();
    displayUserNum(num);
    function displayUserNum(num) {
      $('#num-display').text(`You want to convert  ${num}  Dollars. `);
    }

    $('#EUR').click(function(event) {
      event.preventDefault();
      (async () => {
        let currency = new Currency();
        const response = await currency.getCurrency();
        convEUR(num, response);
        $('#conv-disp').show();
      })();

      function convEUR(num, response) {
        if (response) {
          let convEUR;
          convEUR = parseFloat(num * response.conversion_rates.EUR).toFixed(2);
          $('#conv-disp').text(`The conversion to Euros is:  ` + convEUR);
          return convEUR;
        } else {
          $('#conv-disp').text('Oh no there was an error(non-200 response) for Euros');
        }
      }
    });

    $('#JPY').click(function(event) {
      event.preventDefault();
      (async () => {
        let currency = new Currency();
        const response = await currency.getCurrency();
        convJPY(num, response);
        $('#conv-disp').show();
      })();

      function convJPY(num, response) {
        if (response) {
          let convJPY;
          convJPY = parseFloat(num * response.conversion_rates.JPY).toFixed(2);
          $('#conv-disp').text(`The conversion  to Japanese Yen is:  ` + convJPY);
          return convJPY;
        } else {
          $('#conv-disp').text('Oh no there was an error(non-200 response) for Japanese Yen!');
        }
      }
    });

    $('#RUB').click(function(event) {
      event.preventDefault();
      (async () => {
        let currency = new Currency();
        const response = await currency.getCurrency();
        convRUB(num, response);
        $('#conv-disp').show();
      })();
 
      function convRUB(num, response) {
        if (response) {
          let convRUB;
          convRUB = parseFloat(num * response.conversion_rates.RUB).toFixed(2);
          $('#conv-disp').text(`The conversion to Russian Rubles is:  ` + convRUB);
          return convRUB;
        } else {
          $('#conv-disp').text('Oh no there was an error(non-200 response) for Russian Rubles!');
        }
      }
    });

    $('#FJD').click(function(event) {
      event.preventDefault();
      (async () => {
        let currency = new Currency();
        const response = await currency.getCurrency();
        convFJD(num, response);
        $('#conv-disp').show();
      })();

      function convFJD(num, response) {
        if (response) {
          let convFJD;
          convFJD = parseFloat(num * response.conversion_rates.FJD).toFixed(2);
          $('#conv-disp').text(`The conversion to Fijian Dollars is:  ` + convFJD);
          return convFJD;
        } else {
          $('#conv-disp').text('Oh no there was an error(non-200 response) for Fijian Dollars!');
        }
      }
    });

    $('#HKD').click(function(event) {
      event.preventDefault();
      (async () => {
        let currency = new Currency();
        const response = await currency.getCurrency();
        convHKD(num, response);
        $('#conv-disp').show();
      })();

      function convHKD(num, response) {
        if (response) {
          let convHKD;
          convHKD = parseFloat(num * response.conversion_rates.HKD).toFixed(2);
          $('#conv-disp').text(`The conversion to Hong Kong Dollars is:  ` + convHKD);
          return convHKD;
        } else {
          $('#conv-disp').text('Oh no there was an error(non-200 response) for Hong Kong Dollars!');
        }
      }
    });
  });
});
