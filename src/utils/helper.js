import Swal from 'sweetalert2';

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.onmouseenter = Swal.stopTimer;
		toast.onmouseleave = Swal.resumeTimer;
	},
});

export const notification = (title, icon = 'success', text) => {
	Toast.fire({
		title: title,
		icon: icon,
		text: text ?? null,
	});
};

export const dialog = (optionDialog, handleConfirm) => {
	Swal.fire(optionDialog).then((result) => {
		if (result.isConfirmed) {
			handleConfirm();
		}
	});
};
