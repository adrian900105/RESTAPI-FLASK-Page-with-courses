from wtforms import Form, StringField, IntegerField
from wtforms.validators import DataRequired,Length

class CourseForm(Form):
    # <input max="30" min="3" required name = "name" placeholder="wwww/">
    name = StringField(
        'name', 
        validators=[
            DataRequired(message="Name is required"),
            Length(min=3,max=50, message="Chars lenght between 3 and 50 required")
        ],
        render_kw={"placeholder": "Type a course name"}
    )
    category = StringField(
        'category',
        validators=[DataRequired(message="Category is required")],
        render_kw={"placeholder":"Type a course category"}

    )
    price = IntegerField(
        'price',
        validators=[
            DataRequired(message="Price is required")
        ],
        render_kw={"placeholder":"Type a course price"}
    )
    city = StringField(
        'city',
        validators=[DataRequired(message="City is required")],
        render_kw={"placeholder":"Type a course city"}

    )
    hours = IntegerField(
        'hours',
        validators=[
            DataRequired(message="Hours is required")
        ],
        render_kw={"placeholder":"Type a course hours"}
    )


