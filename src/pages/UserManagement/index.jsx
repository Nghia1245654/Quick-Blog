import React, { useEffect } from 'react'
import UserManagementTable from '@/components/UserManagement'
import { fetchListUser } from '@/services/api/user';
import { useState } from 'react';
import { deleteUser } from '@/services/api/user';
import { DialogDelete } from "@/components/DialogDelete";
const UserManagement = () => {
  const [listUser, setListUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const [Open, setOpen] = useState(false);
      const [idDeleteUser, setIdDeleteUser] = useState(null);
      const openDialog = (id) => {
        setIdDeleteUser(id);
        setOpen(true);
      };
   const handleDeleteUser=async(id)=>{
    try{
      
       // gọi hàm xóa blog khỏi server
       await deleteUser(id);
      //cập nhật lại listPost sau khi xóa
      setListUser(listUser.filter((item) => item._id !== idDeleteUser));
      setOpen(false);
    }catch(err){
      console.error(err);
      setError(err.message);
    }
   }
  const handleUserManagement = async () => {
    try {
        setLoading(true);
        const res = await fetchListUser({});
        console.log("res:", res);
        setListUser(res.data.items);
    } catch (err) {
      console.error(err);
      setError(err.message); // Bây giờ dòng này mới hoạt động
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleUserManagement();
  }, []);
  return (

    <div>
        <UserManagementTable listUser={listUser} loading={loading} openDialog={openDialog} />
        <DialogDelete
          open={Open}
          setOpen={setOpen}
          idDelete={idDeleteUser}
          onConfirm={() => handleDeleteUser(idDeleteUser)}
        />
    </div>
  )
}

export default UserManagement