import Task from "../models/Task";

export const all = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("home", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const taskEdit =  async (req, res) => {
    const { id } = req.params;
  
    await Task.findByIdAndUpdate(id, req.body);
  
    res.redirect("/");
};

export const deleteTask = async (req, res) => {

    const { id } = req.params;
  
    await Task.findByIdAndDelete(id);
  
    res.redirect('/')
};

export const toggledone =  async (req,res) => {
    const {id} = req.params
  
    const task = await Task.findById(id);
  
    task.done = !task.done
  
    await task.save()
  
    res.redirect('/')  
};
