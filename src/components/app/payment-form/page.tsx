"use client";
"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const MultiStepPaymentForm = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: 100,
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    pixKey: ""
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        {step === 1 && (
          <div>
            <h2 className="mb-4">Resumo do Pedido</h2>
            <p><strong>Nome:</strong> {formData.name || "Usuário"}</p>
            <p><strong>Email:</strong> {formData.email || "email@example.com"}</p>
            <p><strong>Valor:</strong> R$ {formData.amount}</p>
            <button onClick={nextStep} className="btn btn-primary mt-3">Continuar</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="mb-4">Escolha a Forma de Pagamento</h2>
            <select className="form-select mb-3" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Selecione...</option>
              <option value="credit_card">Cartão de Crédito</option>
              <option value="pix">Pix</option>
            </select>
            <div className="d-flex justify-content-between">
              <button onClick={prevStep} className="btn btn-secondary">Voltar</button>
              <button onClick={nextStep} disabled={!paymentMethod} className="btn btn-primary">Próximo</button>
            </div>
          </div>
        )}

        {step === 3 && paymentMethod === "credit_card" && (
          <div>
            <h2 className="mb-4">Pagamento com Cartão</h2>
            <input type="text" name="cardNumber" placeholder="Número do Cartão" className="form-control mb-2" onChange={handleInputChange} />
            <input type="text" name="expiryDate" placeholder="Validade (MM/AA)" className="form-control mb-2" onChange={handleInputChange} />
            <input type="text" name="cvv" placeholder="CVV" className="form-control mb-4" onChange={handleInputChange} />
            <div className="d-flex justify-content-between">
              <button onClick={prevStep} className="btn btn-secondary">Voltar</button>
              <button className="btn btn-success">Finalizar Pagamento</button>
            </div>
          </div>
        )}

        {step === 3 && paymentMethod === "pix" && (
          <div>
            <h2 className="mb-4">Pagamento com Pix</h2>
            <input type="text" name="pixKey" placeholder="Chave Pix" className="form-control mb-4" onChange={handleInputChange} />
            <div className="d-flex justify-content-between">
              <button onClick={prevStep} className="btn btn-secondary">Voltar</button>
              <button className="btn btn-success">Finalizar Pagamento</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};