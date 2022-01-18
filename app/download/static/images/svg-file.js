window.onload = function () {
  // This holds all the states for each interactable part in the Multilin SVG
  {
    var stateA1,
      stateA2,
      stateA3,
      stateB1,
      stateB2,
      stateB3,
      stateB4,
      stateB5,
      stateB6,
      stateB7,
      stateB8,
      stateB9,
      stateB10,
      stateB11,
      stateB12,
      stateB13,
      stateB14,
      stateB15,
      stateB16,
      stateB17,
      stateB18,
      stateC1,
      stateC2,
      stateC3,
      stateC4,
      stateC5,
      stateC6,
      stateC7,
      stateC8,
      stateC9,
      stateC10,
      stateC11,
      stateC12,
      stateC13,
      stateC14,
      stateC15,
      stateC16,
      stateC17,
      stateC18,
      stateD1,
      stateD2,
      stateD3,
      stateD4,
      stateD5,
      stateD6,
      stateD7,
      stateD8,
      stateD9,
      stateD10,
      stateEport1,
      stateEport4,
      stateEport5,
      stateF1,
      stateF2,
      stateF3,
      stateF4,
      stateF5,
      stateF6,
      stateF7,
      stateF8,
      stateF9,
      stateF10,
      stateF11,
      stateF12,
      stateF13,
      stateF14,
      stateF15,
      stateF16,
      stateF17,
      stateF18,
      stateF19,
      stateF20,
      stateF21,
      stateF22,
      stateF23,
      stateF24,
      stateG1,
      stateG2,
      stateG3,
      stateG4,
      stateG5,
      stateG6,
      stateG7,
      stateG8,
      stateG9,
      stateG10,
      stateG11,
      stateG12,
      stateG13,
      stateG14,
      stateG15,
      stateG16,
      stateG17,
      stateG18,
      stateG19,
      stateG20,
      stateg21,
      stateG22,
      stateG23,
      stateG24,
      stateH1,
      stateH2,
      stateH3,
      stateH4,
      stateH5,
      stateH6,
      stateH7,
      stateH8,
      stateH9,
      stateH10,
      stateH11,
      stateH12,
      stateH13,
      stateH14,
      stateH15,
      stateH16,
      stateH17,
      stateH18,
      stateH19,
      stateH20,
      stateH21,
      stateH22,
      stateH23,
      stateH24,
      stateJ1,
      stateJ2,
      stateJ3,
      stateJ4,
      stateJ5,
      stateF6,
      stateJ7,
      stateJ8,
      stateJ9,
      stateJ10,
      stateJ11,
      stateJ12,
      stateJ13,
      stateJ14,
      stateJ15,
      stateJ16,
      stateK1,
      stateK2,
      stateK3,
      stateK4,
      stateK5,
      stateK6,
      stateK7,
      stateK8,
      stateK9,
      stateK10,
      stateK11,
      stateK12,
      stateK13,
      stateK14,
      stateK15,
      stateK16 = true;
  }

  var multilin = document.getElementById('multilin-svg').contentDocument;

  // This holds all the button elements for each interactable part of the Multilin SVG
  {
    var elementA1 = multilin.getElementById('A1');
    elementA1.addEventListener('click', function () {
      stateA1 = changeColour(elementA1, stateA1);
    });

    var elementA2 = multilin.getElementById('A2');
    elementA2.addEventListener('click', function () {
      stateA2 = changeColour(elementA2, stateA2);
    });

    var elementA3 = multilin.getElementById('A3');
    elementA3.addEventListener('click', function () {
      stateA3 = changeColour(elementA3, stateA3);
    });

    var elementB1 = multilin.getElementById('B1');
    elementB1.addEventListener('click', function () {
      stateB1 = changeColour(elementB1, stateB1);
    });

    var elementB2 = multilin.getElementById('B2');
    elementB2.addEventListener('click', function () {
      stateB2 = changeColour(elementB2, stateB2);
    });

    var elementB3 = multilin.getElementById('B3');
    elementB3.addEventListener('click', function () {
      stateB3 = changeColour(elementB3, stateB3);
    });

    var elementB4 = multilin.getElementById('B4');
    elementB4.addEventListener('click', function () {
      stateB4 = changeColour(elementB4, stateB4);
    });

    var elementB5 = multilin.getElementById('B5');
    elementB5.addEventListener('click', function () {
      stateB5 = changeColour(elementB5, stateB5);
    });

    var elementB6 = multilin.getElementById('B6');
    elementB6.addEventListener('click', function () {
      stateB6 = changeColour(elementB6, stateB6);
    });

    var elementB7 = multilin.getElementById('B7');
    elementB7.addEventListener('click', function () {
      stateB7 = changeColour(elementB7, stateB7);
    });

    var elementB8 = multilin.getElementById('B8');
    elementB8.addEventListener('click', function () {
      stateB8 = changeColour(elementB8, stateB8);
    });

    var elementB9 = multilin.getElementById('B9');
    elementB9.addEventListener('click', function () {
      stateB9 = changeColour(elementB9, stateB9);
    });

    var elementB10 = multilin.getElementById('B10');
    elementB10.addEventListener('click', function () {
      stateB10 = changeColour(elementB10, stateB10);
    });

    var elementB11 = multilin.getElementById('B11');
    elementB11.addEventListener('click', function () {
      stateB11 = changeColour(elementB11, stateB11);
    });

    var elementB12 = multilin.getElementById('B12');
    elementB12.addEventListener('click', function () {
      stateB12 = changeColour(elementB12, stateB12);
    });

    var elementB13 = multilin.getElementById('B13');
    elementB13.addEventListener('click', function () {
      stateB13 = changeColour(elementB13, stateB13);
    });

    var elementB14 = multilin.getElementById('B14');
    elementB14.addEventListener('click', function () {
      stateB14 = changeColour(elementB14, stateB14);
    });

    var elementB15 = multilin.getElementById('B15');
    elementB15.addEventListener('click', function () {
      stateB15 = changeColour(elementB15, stateB15);
    });

    var elementB16 = multilin.getElementById('B16');
    elementB16.addEventListener('click', function () {
      stateB16 = changeColour(elementB16, stateB16);
    });

    var elementB17 = multilin.getElementById('B17');
    elementB17.addEventListener('click', function () {
      stateB17 = changeColour(elementB17, stateB17);
    });

    var elementB18 = multilin.getElementById('B18');
    elementB18.addEventListener('click', function () {
      stateB18 = changeColour(elementB18, stateB18);
    });

    var elementC1 = multilin.getElementById('C1');
    elementC1.addEventListener('click', function () {
      stateC1 = changeColour(elementC1, stateC1);
    });

    var elementC2 = multilin.getElementById('C2');
    elementC2.addEventListener('click', function () {
      stateC2 = changeColour(elementC2, stateC2);
    });

    var elementC3 = multilin.getElementById('C3');
    elementC3.addEventListener('click', function () {
      stateC3 = changeColour(elementC3, stateC3);
    });

    var elementC4 = multilin.getElementById('C4');
    elementC4.addEventListener('click', function () {
      stateC4 = changeColour(elementC4, stateC4);
    });

    var elementC5 = multilin.getElementById('C5');
    elementC5.addEventListener('click', function () {
      stateC5 = changeColour(elementC5, stateC5);
    });

    var elementC6 = multilin.getElementById('C6');
    elementC6.addEventListener('click', function () {
      stateC6 = changeColour(elementC6, stateC6);
    });

    var elementC7 = multilin.getElementById('C7');
    elementC7.addEventListener('click', function () {
      stateC7 = changeColour(elementC7, stateC7);
    });

    var elementC8 = multilin.getElementById('C8');
    elementC8.addEventListener('click', function () {
      stateC8 = changeColour(elementC8, stateC8);
    });

    var elementC9 = multilin.getElementById('C9');
    elementC9.addEventListener('click', function () {
      stateC9 = changeColour(elementC9, stateC9);
    });

    var elementC10 = multilin.getElementById('C10');
    elementC10.addEventListener('click', function () {
      stateC10 = changeColour(elementC10, stateC10);
    });

    var elementC11 = multilin.getElementById('C11');
    elementC11.addEventListener('click', function () {
      stateC11 = changeColour(elementC11, stateC11);
    });

    var elementC12 = multilin.getElementById('C12');
    elementC12.addEventListener('click', function () {
      stateC12 = changeColour(elementC12, stateC12);
    });

    var elementC13 = multilin.getElementById('C13');
    elementC13.addEventListener('click', function () {
      stateC13 = changeColour(elementC13, stateC13);
    });

    var elementC14 = multilin.getElementById('C14');
    elementC14.addEventListener('click', function () {
      stateC14 = changeColour(elementC14, stateC14);
    });

    var elementC15 = multilin.getElementById('C15');
    elementC15.addEventListener('click', function () {
      stateC15 = changeColour(elementC15, stateC15);
    });

    var elementC16 = multilin.getElementById('C16');
    elementC16.addEventListener('click', function () {
      stateC16 = changeColour(elementC16, stateC16);
    });

    var elementC17 = multilin.getElementById('C17');
    elementC17.addEventListener('click', function () {
      stateC17 = changeColour(elementC17, stateC17);
    });

    var elementC18 = multilin.getElementById('C18');
    elementC18.addEventListener('click', function () {
      stateC18 = changeColour(elementC18, stateC18);
    });

    var elementD1 = multilin.getElementById('D1');
    elementD1.addEventListener('click', function () {
      stateD1 = changeColour(elementD1, stateD1);
    });

    var elementD2 = multilin.getElementById('D2');
    elementD2.addEventListener('click', function () {
      stateD2 = changeColour(elementD2, stateD2);
    });

    var elementD3 = multilin.getElementById('D3');
    elementD3.addEventListener('click', function () {
      stateD3 = changeColour(elementD3, stateD3);
    });

    var elementD4 = multilin.getElementById('D4');
    elementD4.addEventListener('click', function () {
      stateD4 = changeColour(elementD4, stateD4);
    });

    var elementD5 = multilin.getElementById('D5');
    elementD5.addEventListener('click', function () {
      stateD5 = changeColour(elementD5, stateD5);
    });

    var elementD6 = multilin.getElementById('D6');
    elementD6.addEventListener('click', function () {
      stateD6 = changeColour(elementD6, stateD6);
    });

    var elementD7 = multilin.getElementById('D7');
    elementD7.addEventListener('click', function () {
      stateD7 = changeColour(elementD7, stateD7);
    });

    var elementD8 = multilin.getElementById('D8');
    elementD8.addEventListener('click', function () {
      stateD8 = changeColour(elementD8, stateD8);
    });

    var elementD9 = multilin.getElementById('D9');
    elementD9.addEventListener('click', function () {
      stateD9 = changeColour(elementD9, stateD9);
    });

    var elementD10 = multilin.getElementById('D10');
    elementD10.addEventListener('click', function () {
      stateD10 = changeColour(elementD10, stateD10);
    });

    var elementF1 = multilin.getElementById('F1');
    elementF1.addEventListener('click', function () {
      stateF1 = changeColour(elementF1, stateF1);
    });

    var elementF2 = multilin.getElementById('F2');
    elementF2.addEventListener('click', function () {
      stateF2 = changeColour(elementF2, stateF2);
    });

    var elementF3 = multilin.getElementById('F3');
    elementF3.addEventListener('click', function () {
      stateF3 = changeColour(elementF3, stateF3);
    });

    var elementF4 = multilin.getElementById('F4');
    elementF4.addEventListener('click', function () {
      stateF4 = changeColour(elementF4, stateF4);
    });

    var elementF5 = multilin.getElementById('F5');
    elementF5.addEventListener('click', function () {
      stateF5 = changeColour(elementF5, stateF5);
    });

    var elementB6 = multilin.getElementById('B6');
    elementB6.addEventListener('click', function () {
      stateB6 = changeColour(elementB6, stateB6);
    });

    var elementF7 = multilin.getElementById('F7');
    elementF7.addEventListener('click', function () {
      stateF7 = changeColour(elementF7, stateF7);
    });

    var elementF8 = multilin.getElementById('F8');
    elementF8.addEventListener('click', function () {
      stateF8 = changeColour(elementF8, stateF8);
    });

    var elementF9 = multilin.getElementById('F9');
    elementF9.addEventListener('click', function () {
      stateF9 = changeColour(elementF9, stateF9);
    });

    var elementF10 = multilin.getElementById('F10');
    elementF10.addEventListener('click', function () {
      stateF10 = changeColour(elementF10, stateF10);
    });

    var elementB11 = multilin.getElementById('B11');
    elementB11.addEventListener('click', function () {
      stateB11 = changeColour(elementB11, stateB11);
    });

    var elementB12 = multilin.getElementById('B12');
    elementB12.addEventListener('click', function () {
      stateB12 = changeColour(elementB12, stateB12);
    });

    var elementB13 = multilin.getElementById('B13');
    elementB13.addEventListener('click', function () {
      stateB13 = changeColour(elementB13, stateB13);
    });

    var elementB14 = multilin.getElementById('B14');
    elementB14.addEventListener('click', function () {
      stateB14 = changeColour(elementB14, stateB14);
    });

    var elementB15 = multilin.getElementById('B15');
    elementB15.addEventListener('click', function () {
      stateB15 = changeColour(elementB15, stateB15);
    });

    var elementB16 = multilin.getElementById('B16');
    elementB16.addEventListener('click', function () {
      stateB16 = changeColour(elementB16, stateB16);
    });

    var elementB17 = multilin.getElementById('B17');
    elementB17.addEventListener('click', function () {
      stateB17 = changeColour(elementB17, stateB17);
    });

    var elementB18 = multilin.getElementById('B18');
    elementB18.addEventListener('click', function () {
      stateB18 = changeColour(elementB18, stateB18);
    });

    var elementF19 = multilin.getElementById('F19');
    elementF19.addEventListener('click', function () {
      stateF19 = changeColour(elementF19, stateF19);
    });

    var elementF20 = multilin.getElementById('F20');
    elementF20.addEventListener('click', function () {
      stateF20 = changeColour(elementF20, stateF20);
    });

    var elementF21 = multilin.getElementById('F21');
    elementF21.addEventListener('click', function () {
      stateF21 = changeColour(elementF21, stateF21);
    });

    var elementF22 = multilin.getElementById('F22');
    elementF22.addEventListener('click', function () {
      stateF22 = changeColour(elementF22, stateF22);
    });

    var elementF23 = multilin.getElementById('F23');
    elementF23.addEventListener('click', function () {
      stateF23 = changeColour(elementF23, stateF23);
    });

    var elementF24 = multilin.getElementById('F24');
    elementF24.addEventListener('click', function () {
      stateF24 = changeColour(elementF24, stateF24);
    });
  }

  function changeColour(element, state) {
    if (state) {
      element.setAttribute('style', 'fill: #eeeeee; stroke: #000000; stroke-width: 0.5;');
    } else if (!state) {
      element.setAttribute('style', 'fill: #f06; stroke: #000000; stroke-width: 0.5;');
    }

    state = !state;
    return state;
  }
};
