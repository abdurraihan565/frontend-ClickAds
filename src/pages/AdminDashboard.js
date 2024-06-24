import React from 'react';
import AllProducts from '../components/AllProducts';
import CreateProduct from '../components/CreateProduct';
import UpdateProducts from '../components/UpdateProducts';
import DeleteProduct from '../components/DeleteProduct';
import AllUser from '../components/AllUser';
import SingleUser from '../components/SingleUser';
import UpdateUser from '../components/UpdateUser';
import DeleteUser from '../components/DeleteUser';
import BanUsers from '../components/BanUsers';
import UnBan from '../components/UnBan';
import PayoutsHandelar from '../components/PayoutsHandelar';
import Message from '../components/Message';
import GetMessage from '../components/GetMessage';
import DeleteMessages from '../components/DeleteMessages';

function AdminDashboard() {
  //AllProductsHandelar
  const AllProductsHandelar = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'block';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
  };

  //Create_products
  const CreateProducts = () => {
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'block';
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
  };
  //UpadteProducts
  const UpadteProducts = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'block';
  };
  //DeleteProducts
  const DeleteProducts = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'block';
  };
  // AllUsers
  const AllUsers = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'block';
  };
  //singleUsers
  const SingleUsers = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'block';
  };
  const UpdateUsers = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'block';
  };
  const DeleteUsers = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'block';
  };
  const BanUser = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'block';
  };
  const UnBanUser = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'block';
  };
  const Payouts = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'block';
  };
  const messageHandelar = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'block';
  };
  const GetMessageHandelar = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'block';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'none';
  };

  const DeleteMessage = () => {
    const AllProducts = document.querySelector('.all_products');
    AllProducts.style.display = 'none';
    const CreateProducts = document.querySelector('.Create_products');
    CreateProducts.style.display = 'none';
    const Update_products = document.querySelector('.Update_products');
    Update_products.style.display = 'none';
    const Delete_products = document.querySelector('.Delete_products');
    Delete_products.style.display = 'none';
    const All_Users = document.querySelector('.All_Users');
    All_Users.style.display = 'none';
    const Single_Users = document.querySelector('.Single_Users');
    Single_Users.style.display = 'none';
    const Update_Users = document.querySelector('.Update_Users');
    Update_Users.style.display = 'none';
    const Delete_Users = document.querySelector('.Delete_Users');
    Delete_Users.style.display = 'none';
    const Ban_Users = document.querySelector('.Ban_Users');
    Ban_Users.style.display = 'none';
    const UnBan_Users = document.querySelector('.UnBan_Users');
    UnBan_Users.style.display = 'none';
    const payouts = document.querySelector('.payouts');
    payouts.style.display = 'none';
    const message = document.querySelector('.message');
    message.style.display = 'none';
    const GetMessage = document.querySelector('.get_message');
    GetMessage.style.display = 'none';
    const delete_message = document.querySelector('.delete_message');
    delete_message.style.display = 'block';
  };

  return (
    <div className="dashboard_containner">
      <div className="dashboard_containner_popup">
        <div className="dashboard_containner_popup_des_Active">
          <ul>
            <li>
              <i class="fa fa-tachometer" aria-hidden="true"></i>
              <span>admin dashboard</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-eye"></i>
              <span onClick={AllProductsHandelar}>All products</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-square-envelope"></i>
              <span onClick={CreateProducts}>Create Products</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-rectangle-ad"></i>
              <span onClick={UpadteProducts}>update Products</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={DeleteProducts}>Delete Products</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={AllUsers}>All Users</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={SingleUsers}>Single Users</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={UpdateUsers}>Update Users</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={DeleteUsers}>Delete User</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={BanUser}>Ban User</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={UnBanUser}>UnBan User</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={Payouts}>Payouts</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={messageHandelar}>Message</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={GetMessageHandelar}>Get-Message</span>
            </li>
          </ul>
        </div>
        <div className="dashboard_containner_popup_des">
          <ul>
            <li>
              <i class="fa-solid fa-user"></i>
              <span onClick={DeleteMessage}>Delete-Message</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="admin_dashboard">
        <div className="all_products">
          <AllProducts />
        </div>
        <div className="Create_products">
          <CreateProduct />
        </div>
        <div className="Update_products">
          <UpdateProducts />
        </div>
        <div className="Delete_products">
          <DeleteProduct />
        </div>
        <div className="All_Users">
          <AllUser />
        </div>
        <div className="Single_Users">
          <SingleUser />
        </div>

        <div className="Update_Users">
          <UpdateUser />
        </div>
        <div className="Delete_Users">
          <DeleteUser />
        </div>
        <div className="Ban_Users">
          <BanUsers />
        </div>
        <div className="UnBan_Users">
          <UnBan />
        </div>
        <div className="payouts">
          <PayoutsHandelar />
        </div>
        <div className="message">
          <Message />
        </div>
        <div className="get_message">
          <GetMessage />
        </div>
        <div className="delete_message">
          <DeleteMessages />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
