"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = exports.toaster = void 0;
var utils_1 = require("../../utils/utils");
var toast_1 = require("@ark-ui/react/toast");
var lu_1 = require("react-icons/lu");
exports.toaster = (0, toast_1.createToaster)({
    placement: 'bottom-end',
    overlap: true,
    gap: 24,
});
var Toaster = function () {
    return (<toast_1.Toaster toaster={exports.toaster}>
      {function (toast) {
            var color = 'border-red-600 bg-red-100';
            if (toast.type === 'success')
                color = 'border-green-600 bg-green-100';
            return (<toast_1.Toast.Root key={toast.id} className={(0, utils_1.cn)(color, 'rounded-2 relative min-w-[300px] rounded-sm border p-4 text-[#1A1A1A]')}>
            <toast_1.Toast.Title className='text-xl font-medium'>
              {toast.title}
            </toast_1.Toast.Title>
            <toast_1.Toast.Description>{toast.description}</toast_1.Toast.Description>
            <toast_1.Toast.CloseTrigger className='absolute top-2 right-2 z-10 cursor-pointer' asChild>
              <lu_1.LuX />
            </toast_1.Toast.CloseTrigger>
          </toast_1.Toast.Root>);
        }}
    </toast_1.Toaster>);
};
exports.Toaster = Toaster;
