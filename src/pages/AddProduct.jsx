import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    MenuItem,
} from '@mui/material';

const validationSchema = yup.object().shape({
    productName: yup.string().required('Product name is required'),
    category: yup.string().required('Category is required'),
    price: yup.number().positive('Price must be a positive number').required('Price is required'),
    quantity: yup.number().positive('Quantity must be a positive number').required('Quantity is required'),
    description: yup.string().required('Description is required'),
    image: yup.mixed().required('Product image is required'),
    tags: yup.array().of(yup.string()).min(1, 'At least one tag is required'),
    status: yup.string().oneOf(['active', 'inactive']).required('Status is required'),
    featured: yup.boolean(),
    discount: yup.number().min(0, 'Discount must be a positive number'),
});

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Add your form submission logic here
    };

    return (
        <Card>
            <CardHeader title="Add New Product" />
            <Divider />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Product Name"
                                name="productName"
                                variant="outlined"
                                {...register('productName')}
                                error={!!errors.productName}
                                helperText={errors.productName?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Category"
                                name="category"
                                select
                                variant="outlined"
                                {...register('category')}
                                error={!!errors.category}
                                helperText={errors.category?.message}
                            >
                                <MenuItem value="">Select Category</MenuItem>
                                <MenuItem value="electronics">Electronics</MenuItem>
                                <MenuItem value="fashion">Fashion</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Price"
                                name="price"
                                type="number"
                                variant="outlined"
                                {...register('price')}
                                error={!!errors.price}
                                helperText={errors.price?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Quantity"
                                name="quantity"
                                type="number"
                                variant="outlined"
                                {...register('quantity')}
                                error={!!errors.quantity}
                                helperText={errors.quantity?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                multiline
                                rows={4}
                                variant="outlined"
                                {...register('description')}
                                error={!!errors.description}
                                helperText={errors.description?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p className='text-gray-500 mb-2'>Product Image</p>
                            <TextField
                                fullWidth
                                // label="Product Image"
                                name="image"
                                type="file"
                                variant="outlined"
                                {...register('image')}
                                error={!!errors.image}
                                helperText={errors.image?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Tags"
                                name="tags"
                                placeholder="Comma separated tags"
                                variant="outlined"
                                {...register('tags')}
                                error={!!errors.tags}
                                helperText={errors.tags?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Status"
                                name="status"
                                select
                                variant="outlined"
                                {...register('status')}
                                error={!!errors.status}
                                helperText={errors.status?.message}
                            >
                                <MenuItem value="active">Active</MenuItem>
                                <MenuItem value="inactive">Inactive</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" alignItems="center">
                                <TextField
                                    fullWidth
                                    label="Discount"
                                    name="discount"
                                    type="number"
                                    variant="outlined"
                                    {...register('discount')}
                                    error={!!errors.discount}
                                    helperText={errors.discount?.message}
                                />
                                {/* <Divider orientation="vertical" flexItem sx={{ mx: 2 }} /> */}
                                {/* <Box display="flex" alignItems="center">
                                    <input
                                        type="checkbox"
                                        {...register('featured')}
                                        style={{ marginRight: '8px' }}
                                    />
                                    <label>Featured Product</label>
                                </Box> */}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Add Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddProduct;