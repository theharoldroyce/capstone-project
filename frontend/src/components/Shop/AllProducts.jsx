import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop, editProduct } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  const handleEdit = (id, name, discountPrice, stock) => {
    setProductId(id);
    setName(name);
    setCategory(category)
    setDiscountPrice(discountPrice);
    setStock(stock);
    setOpenDialog(true);
  };

  const handleUpdate = () => {
    const updatedData = {
      name: name,
      category: category,
      discountPrice: discountPrice,
      stock: stock,
    };

    dispatch(editProduct(productId, updatedData));
    setOpenDialog(false);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setName(product.name);
        setCategory(product.category);
        setDiscountPrice(product.discountPrice);
        setStock(product.stock);
      }
    }
  }, [products, productId]);

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 180, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      minWidth: 130,
      flex: 0.6,
      type: "number",
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Edit",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleEdit(params.id, params.name, params.discountPrice, params.stock)}>
              <AiOutlineEdit size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "₱ " + item.discountPrice + ".00",
        Stock: item.stock + " pcs",
        sold: item.sold_out + " pcs",
      });
    });


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '500px' // Adjust the width as per your requirements
          }
        }}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            disabled
            // onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Category"
            value={category}
            disabled
            // onChange={(e) => setCategory(e.target.value)}
            fullWidth
          />
          <TextField
            label="Price"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            fullWidth
          />
          <TextField
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllProducts;
