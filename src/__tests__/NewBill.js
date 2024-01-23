/**
 * @jest-environment jsdom
 */

<<<<<<< HEAD
import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"


describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then ...", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
=======
import { screen, fireEvent, waitFor} from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import store from "../__mocks__/store.js"
import { localStorageMock } from "../__mocks__/localStorage.js";
import { ROUTES } from "../constants/routes.js";

const onNavigate = (pathname) => {
  document.body.innerHTML =  `<div id="root">${ROUTES({ pathname })}</div>`
};

describe("Given I am connected as an employee", () => {

  let newBill;
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    window.localStorage.setItem('user', JSON.stringify({
      type: 'Employee',
      email: "osef@domain.fr",
    }))

    document.body.innerHTML = `<div id="root">${NewBillUI()}</div>`
    newBill = new NewBill({document, onNavigate, store, localStorage: window.localStorage })
  })

  afterEach(() => {

  })

  describe("When I sumbit form without file", () => {
    test("then it should display an error", () => {
      const fileInput = screen.getByTestId("file")
      fireEvent.change(fileInput)
      const errorMessage = screen.getByTestId("file-error")
      expect(errorMessage.textContent).toBe("Aucun fichier sélectionné")
    })
  })

  describe("When I sumbit form with wrong file format", () => {
    test("then it should display an error", () => {
      const fileInput = screen.getByTestId("file")

      const file = new File(["image"], "image.txt")
      Object.defineProperty(fileInput, "files", { value: [file] })

      fireEvent.change(fileInput)
      const errorMessage = screen.getByTestId("file-error")
      expect(errorMessage.textContent).toBe("le fichier sélectionné est au mauvais format")
    })
  })

  describe("When I sumbit form with a valid file format", () => {
    test("Then it should submit and navigate to bills", () => {
      const fileInput = screen.getByTestId("file")

      const file = new File(["image"], "image.jpg", {type: "image/jpg"})
      Object.defineProperty(fileInput, "files", { value: [file] })

      fireEvent.change(fileInput)
      const errorMessage = screen.getByTestId("file-error")
      expect(errorMessage.textContent).toBe("")
    })
  })

  describe ("When I submit all field", () => {
    test("Then I should navigate to bills page" , async () => {
      const myBill = {
        type: "sfjpjsf",
        name:  "dgkjhdkjgsdg",
        amount: 12,
        date:  "21-11-2023",
        vat: "1",
        pct: 10,
        commentary: "ceci est un commentaire",
      }

      const fileInput = screen.getByTestId("file")
      const file = new File(["image"], "image.jpg", {type: "image/jpg"})
      Object.defineProperty(fileInput, "files", { value: [file] })

      screen.getByTestId("expense-type").value = myBill.type
      screen.getByTestId("expense-name").value = myBill.name
      screen.getByTestId("amount").value = myBill.amount
      screen.getByTestId("datepicker").value = myBill.date
      screen.getByTestId("vat").value = myBill.vat
      screen.getByTestId("pct").value = myBill.pct
      screen.getByTestId("commentary").value = myBill.commentary

      fireEvent.change(fileInput)

      const form = screen.getByTestId("form-new-bill")
      fireEvent.submit(form)

      await waitFor(() => {
        expect(screen.getByText("Mes notes de frais")).toBeTruthy()
      })
>>>>>>> fix-bug-DisplayDashboard
    })
  })
})
