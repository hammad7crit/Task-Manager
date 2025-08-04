let plus_icon = document.querySelector(".plus_icon");
let side_panel = null;

plus_icon.addEventListener("click", () => {
  if (side_panel) {
    side_panel.classList.replace("translate-x-0", "translate-x-full");
    setTimeout(() => {
      side_panel.remove();
      side_panel = null;
    }, 300);
  } else {
    side_panel = document.createElement("div");
    side_panel.classList.add(
      "fixed",
      "top-0",
      "right-0",
      "w-full",
      "max-w-md",
      "h-screen",
      "bg-gray-300",
      "text-black",
      "z-50",
      "transform",
      "transition-transform",
      "duration-300",
      "translate-x-full",
      "shadow-lg",
      "shadow-black",
      "overflow-y-auto"
    );
    side_panel.innerHTML = `
            <h2 class="text-xl font-bold p-4">Your Tasks</h2>
        `;
    document.body.appendChild(side_panel);

    // Trigger slide-in after append (force next frame)
    requestAnimationFrame(() => {
      side_panel.classList.replace("translate-x-full", "translate-x-0");
    });
    new_task_div = document.createElement("div");
    new_task_div.classList.add(
      "w-full",
      "relative",
      "flex",
      "flex-col",
      "gap-3",
      "items-center"
    );
    side_panel.appendChild(new_task_div);
    new_task = document.createElement("input");
    new_task.type = "text";
    new_task.placeholder = "Add a new task...";
    new_task.classList.add(
      "w-[90%]",
      "h-[10%]",
      "ml-4",
      "p-4",
      "border",
      "border-transparent",
      "rounded-2xl",
      "transition-all",
      "duration-300",
      "focus:outline-none",
      "focus:border-gray-200",
      "focus:ring-4",
      "focus:ring-gray-300"
    );
    new_task_div.appendChild(new_task);
    newtask_desc = document.createElement("textarea");
    newtask_desc.type = "text";
    newtask_desc.placeholder = "Add a description...";
    new_task_div.appendChild(newtask_desc);
    newtask_desc.classList.add(
      "w-[90%]",
      "h-[10%]",
      "ml-4",
      "p-4",
      "border",
      "border-transparent",
      "rounded-2xl",
      "transition-all",
      "duration-300",
      "focus:outline-none",
      "focus:border-gray-200",
      "focus:ring-4",
      "focus:ring-gray-300"
    );
    create_button = document.createElement("button");
    create_button.innerHTML = "Create Task";
    create_button.classList.add(
      "w-[50%]",
      "h-[8vh]",
      "bg-purple-700",
      "flex",
      "justify-center",
      "text-white",
      "items-center",
      "border",
      "rounded-xl",
      "transition",
      "duration-300",
      "hover:bg-purple-900"
    );
    new_task_div.appendChild(create_button);

    // task creation
    create_button.addEventListener("click", () => {
      if (new_task.value.trim() !== "") {
        if (newtask_desc.value.trim() !== "") {
          created_task_div = document.createElement("div");
          created_task_div.classList.add(
            "w-[90%]",
            "h-[45%]",
            "bg-gray-300",
            "flex",
            "ml-8",
            "mt-4",
            "shadow-lg",
            "shadow-gray-500",
            "border-4",
            "border-green-300",
            "rounded-xl",
            "flex",
            "flex-col",
            "gap-3",
            "justify-center",
            "items-center"
          );
          side_panel.appendChild(created_task_div);

          new_task_created = document.createElement("input");
          new_task_created.value = new_task.value;
          new_task_created.readOnly = true;
          new_task_created.classList.add(
            "w-[90%]",
            "h-[10%]",
            "ml-4",
            "p-4",
            "border",
            "border-transparent",
            "rounded-2xl",
            "transition-all",
            "duration-300",
            "focus:outline-none",
            "focus:border-gray-200",
            "focus:ring-4",
            "focus:ring-gray-300"
          );
          created_task_div.appendChild(new_task_created);
          new_desc_created = document.createElement("textarea");
          new_desc_created.value = newtask_desc.value;
          new_desc_created.readOnly = true;
          new_desc_created.classList.add(
            "w-[90%]",
            "h-[50%]",
            "ml-4",
            "p-4",
            "border",
            "border-transparent",
            "rounded-2xl",
            "transition-all",
            "duration-300",
            "focus:outline-none",
            "focus:border-gray-200",
            "focus:ring-4",
            "focus:ring-gray-300"
          );
          created_task_div.appendChild(new_desc_created);
          actions_completed_div = document.createElement("div");
          actions_completed_div.classList.add(
            "w-[90%]",
            "h-[20%]",
            "border",
            "rounded-xl",
            "ml-4",
            "bg-white",
            "flex",
            "items-center",
            "justify-center",
            "gap-10"
          );
          created_task_div.appendChild(actions_completed_div);
          task_completed_icon = document.createElement("i");
          task_completed_icon.classList.add(
            "fa-solid",
            "fa-check-double",
            "w-[12%]",
            "h-[60%]",
            "bg-green-400",
            "rounded-xl",
            "cursor-pointer",
            "flex",
            "items-center",
            "justify-center"
          );
          actions_completed_div.appendChild(task_completed_icon);
          task_deleted_icon = document.createElement("i");
          task_deleted_icon.classList.add(
            "fa-solid",
            "fa-trash",
            "w-[12%]",
            "h-[60%]",
            "bg-red-400",
            "rounded-xl",
            "cursor-pointer",
            "flex",
            "items-center",
            "justify-center"
          );
          actions_completed_div.appendChild(task_deleted_icon);
          task_edited_icon = document.createElement("i");
          task_edited_icon.classList.add(
            "fa-solid",
            "fa-pencil",
            "w-[12%]",
            "h-[60%]",
            "bg-yellow-400",
            "rounded-xl",
            "cursor-pointer",
            "flex",
            "items-center",
            "justify-center"
          );
          actions_completed_div.appendChild(task_edited_icon);
        }
      }
    });
  }
});
