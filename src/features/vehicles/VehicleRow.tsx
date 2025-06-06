import Table from "../../components/Table";
import Modal from "../../components/Modal";
import VehicleForm from "./VehicleForm";
import styled from "styled-components";

const DetailsButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-brand-600);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: left;
  width: 100%;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-brand-700);
    text-decoration: underline;
  }
  
  &:focus {
    outline: none;
    color: var(--color-brand-700);
  }
`;

export default function VehicleRow({ vehicle }: any) {
  const { id, apartment, category, registerDate } = vehicle;

  function formatDate(dateString: any) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Lấy ngày, thêm 0 nếu nhỏ hơn 10
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lấy tháng (bắt đầu từ 0)
    const year = date.getFullYear(); // Lấy năm
    return `${day}-${month}-${year}`;
  }

  return (
    <Table.Row>
      <div>{id}</div>
      <div>{apartment?.addressNumber || 'N/A'}</div>
      <div>{category}</div>
      <div>{formatDate(registerDate)}</div>
      <Modal>
        <Modal.Open id="details">
          <DetailsButton>Details</DetailsButton>
        </Modal.Open>

        <Modal.Window id="details" name="Vehicle Details">
          <VehicleForm vehicle={vehicle} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
